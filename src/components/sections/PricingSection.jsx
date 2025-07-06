import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { CheckCircle, Zap } from 'lucide-react';

const PricingSection = ({ price, isRegistered, scrollToRegistration }) => {
  const features = [
    "90-Min Expert-Led Live Session",
    "Comprehensive Q&A Session",
    "University Shortlisting Guide",
    "Visa Interview Success Blueprint",
    "Scholarship Application Checklist",
    "Post-Webinar Resource Toolkit",
    "Access to Private Community Group"
  ];

  // Load Razorpay script on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Trigger Razorpay Checkout
  const handlePayment = () => {
    if (!isRegistered) {
      scrollToRegistration();
      return;
    }

    const options = {
      key: 'rzp_live_LyIcEeEzIUoWYX', // 🔐 Use your Razorpay live key
      amount: price * 100, // ₹ to paise
      currency: 'INR',
      name: 'Study in USA Masterclass',
      description: 'Webinar Access Payment',
      image: 'https://yourdomain.com/logo.png', // Optional logo
      handler: function (response) {
        alert(`✅ Payment Successful!\nRazorpay Payment ID: ${response.razorpay_payment_id}`);

        // Optional: send to backend
        /*
        fetch('/api/verify-payment', {
          method: 'POST',
          body: JSON.stringify(response),
          headers: { 'Content-Type': 'application/json' }
        });
        */
      },
      prefill: {
        name: 'Student Name',
        email: 'email@example.com',
        contact: '9876543210'
      },
      notes: {
        webinar: 'USA Masterclass'
      },
      theme: {
        color: '#EF4444'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-slate-900/70">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Invest in Your <span className="usa-text-gradient">American Dream</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            One-time payment for invaluable knowledge and a lifetime of opportunity.
            {isRegistered ? " Complete your payment below." : " Register first, then proceed to payment."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect-usa border-red-500/50 max-w-lg mx-auto overflow-hidden shadow-2xl">
            <div className="p-2 bg-gradient-to-r from-red-600 to-red-800 text-center text-white font-semibold">
              <Zap className="inline-block h-5 w-5 mr-2" />
              EXCLUSIVE WEBINAR ACCESS
            </div>
            <CardHeader className="text-center pt-8 pb-4">
              <CardTitle className="text-2xl font-bold text-slate-100">Study in USA Masterclass</CardTitle>
              <div className="my-6">
                <span className="text-5xl md:text-6xl font-black usa-text-gradient">₹{price}</span>
                <span className="text-lg text-slate-400 ml-2 line-through">₹1999</span>
              </div>
              <CardDescription className="text-slate-300">
                {isRegistered
                  ? "You're registered! Complete payment to join."
                  : "Register your details to get the payment link."}
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 md:px-8 pb-8">
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                type="button"
                onClick={handlePayment}
                className="w-full button-primary-usa py-5 text-lg"
              >
                {isRegistered ? `Pay ₹${price} Securely` : "Register to Unlock Payment"}
              </Button>

              <p className="text-center text-xs text-slate-400 mt-4">
                🔒 Secure Payment via Razorpay | Limited Seats!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
