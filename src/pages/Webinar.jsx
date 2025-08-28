import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import StickyHeader from '@/components/StickyHeader';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import HostSection from '@/components/sections/HostSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/Footer';
import AlertBanner from '@/components/AlertBanner';

export default function Webinar() {
  const { toast } = useToast();
  const webinarDate = "2025-08-31T19:00:00";
  const webinarPrice = 399;

  const [registrations, setRegistrations] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);

  useEffect(() => {
    const savedRegistrations = localStorage.getItem('usaWebinarRegistrations');
    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }

    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('payment_success') === 'true') {
      toast({
        title: "Welcome Back!",
        description: "We hope your payment was successful. Your seat should be confirmed!",
        className: "bg-green-600 text-white border-green-700",
        duration: 8000,
      });
      window.history.replaceState(null, null, window.location.pathname);
    } else if (queryParams.get('payment_cancelled') === 'true') {
      toast({
        title: "Payment Attempt Noted",
        description: "It seems you cancelled the payment or it didn't go through. Please try again to secure your spot.",
        variant: "destructive",
        duration: 8000,
      });
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  const handleRegistration = (formData, formId) => {
    if (!formData.fullName || !formData.email || !formData.whatsappNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in your Full Name, Email, and WhatsApp Number.",
        variant: "destructive"
      });
      return false;
    }

    const newRegistration = {
      ...formData,
      formId,
      timestamp: new Date().toISOString(),
      paymentStatus: 'pending_payment_link_provided'
    };

    const updatedRegistrations = [...registrations, newRegistration];
    setRegistrations(updatedRegistrations);
    localStorage.setItem('usaWebinarRegistrations', JSON.stringify(updatedRegistrations));
    setCurrentUserData(newRegistration);
    setIsRegistered(true);

    toast({
      title: "Registration Details Saved! 🎉",
      description: "Great! Now click the 'Pay Now' button to complete your enrollment.",
      className: "bg-blue-600 text-white border-blue-700"
    });

    return true;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };

  const handleProceedToPayment = async () => {
    if (!isRegistered || !currentUserData) {
      toast({
        title: "Registration Required",
        description: "Please register your details first before proceeding to payment.",
        variant: "destructive",
      });
      scrollToSection('registration-form-hero');
      return;
    }

    toast({
      title: "Redirecting to Payment...",
      description: "You will now be taken to Razorpay to complete your payment.",
    });

    await loadRazorpayScript();

    const options = {
      key: "plink_Qi6d8VVMRd8Szp", // Replace with your Razorpay key ID
      amount: webinarPrice * 100,
      currency: "INR",
      name: "USA Study Webinar",
      description: "Webinar Access Fee",
      image: "logo.png",
      handler: function (response) {
        toast({
          title: "Payment Successful 🎉",
          description: `Payment ID: ${response.razorpay_payment_id}`,
          className: "bg-green-600 text-white border-green-700",
        });
      },
      prefill: {
        name: currentUserData.fullName,
        email: currentUserData.email,
        contact: currentUserData.whatsappNumber,
      },
      notes: {
        formId: currentUserData.formId,
      },
      theme: {
        color: "#EF4444",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen usa-gradient-bg text-slate-100 overflow-x-hidden">
      <Toaster />
      <AlertBanner message={`Free Admission and Stay to Full-Time Work: US Study & H1B Career Webinar: ₹${webinarPrice}! Limited Seats - Book Yours Now!`} />
      <StickyHeader scrollToSection={scrollToSection} price={webinarPrice} />
      <main>
        <HeroSection
          webinarDate={webinarDate}
          onRegister={handleRegistration}
          scrollToSection={scrollToSection}
          price={webinarPrice}
          isRegistered={isRegistered}
          onProceedToPayment={handleProceedToPayment}
        />
        <div className="w-full flex justify-center mt-10 mb-8">
          <div className="w-full max-w-xl px-4">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-700">
              <video
                className="w-full h-auto rounded-xl"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <BenefitsSection />
        <HostSection />
        <TestimonialsSection />
        <PricingSection
          price={webinarPrice}
          onPayNow={handleProceedToPayment}
          isRegistered={isRegistered}
          scrollToRegistration={() => scrollToSection('registration-form-hero')}
        />
        <FAQSection price={webinarPrice} />
        <FinalCTASection
          onRegister={handleRegistration}
          scrollToSection={scrollToSection}
          price={webinarPrice}
          onPayNow={handleProceedToPayment}
          isRegistered={isRegistered}
        />
      </main>
      <Footer />
    </div>
  );
}
