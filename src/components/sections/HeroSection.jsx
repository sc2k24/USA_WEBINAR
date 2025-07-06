import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Clock, IndianRupee } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import RegistrationForm from '@/components/RegistrationForm';

const HeroSection = ({ webinarDate, onRegister, scrollToSection, price, isRegistered, onProceedToPayment }) => {
  const targetDate = new Date(webinarDate).getTime();

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 md:pt-32 usa-gradient-bg">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-50 floating"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-40 floating" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Study in the <span className="usa-text-gradient">USA</span>, Work on an <span className="usa-text-gradient">H1B</span>
              <br />
              Learn How in Our ₹{price} Expert Webinar!
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Get insider secrets to US university admissions, scholarships, and visa success. Limited seats at this special price!
            </p>

            {/* Date and Time */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-10">
              <div className="flex items-center text-slate-200 bg-slate-800/50 px-4 py-2 rounded-lg">
                <CalendarDays className="h-5 w-5 text-red-400 mr-2" />
                <span>{new Date(webinarDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center text-slate-200 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5 text-red-400 mr-2" />
                <span>7:00 PM IST</span>
              </div>
            </div>

            <CountdownTimer targetDate={targetDate} />
          </motion.div>

          {/* RIGHT COLUMN: Video + Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg mx-auto"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
              <video
                className="w-full h-auto rounded-2xl"
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

            <div className="mt-6 text-center">
              {isRegistered ? (
                <>
                  <Button
                    size="lg"
                    className="button-primary-usa w-full px-10 py-7 text-xl pulse-glow-red"
                    onClick={onProceedToPayment}
                  >
                    <IndianRupee className="mr-2 h-6 w-6" />
                    Pay ₹{price} Now
                  </Button>
                  <p className="text-sm text-slate-400 mt-3">
                    You're registered! Complete payment to secure your spot.
                  </p>
                </>
              ) : (
                <>
                  <Button
                    size="lg"
                    className="button-primary-usa w-full px-10 py-7 text-xl pulse-glow-red"
                    onClick={() => scrollToSection('registration-form-hero')}
                  >
                    Register to Get Payment Link
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                  <p className="text-sm text-slate-400 mt-3">
                    Join 500+ students who invested in their future!
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* REGISTRATION FORM BELOW HERO */}
      <div id="registration-form-hero" className="container max-w-xl mx-auto mb-20 px-4">
        {!isRegistered ? (
          <RegistrationForm onSubmit={onRegister} formId="heroForm" price={price} />
        ) : (
          <div className="glass-effect-usa border-red-500/40 shadow-xl p-8 rounded-lg text-center mt-10">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Registration Saved!</h3>
            <p className="text-slate-300 mb-6">Click the button below to complete your payment of ₹{price} via Razorpay.</p>
            <Button
              size="lg"
              className="button-primary-usa w-full px-10 py-7 text-xl pulse-glow-red"
              onClick={onProceedToPayment}
            >
              <IndianRupee className="mr-2 h-6 w-6" />
              Pay ₹{price} Now
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSection;