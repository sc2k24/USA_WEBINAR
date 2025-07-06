import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lock, UserPlus, IndianRupee } from 'lucide-react';

const FinalCTASection = ({ scrollToSection, price, onPayNow, isRegistered }) => {
  
  const handleFinalCTAAction = () => {
    if (isRegistered) {
      onPayNow();
    } else {
      scrollToSection('registration-form-hero'); // Scroll to top registration form
    }
  };

  return (
    <section id="final-cta" className="py-16 md:py-24 px-4 bg-slate-900/70">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Your <span className="usa-text-gradient">USA Dream</span> is an Investment Away!
          </h2>
          <p className="text-lg md:text-xl text-red-400 mb-6 font-semibold">
            ⚡ Last Chance: Seats Filling Fast for Just ₹{price}! ⚡
          </p>
          <p className="text-md md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            This webinar is your golden ticket to understanding the A-Z of studying in the USA. 
            {isRegistered ? " Complete your payment now!" : " Register your details first, then proceed to payment."}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button 
            size="lg" 
            className="button-primary-usa px-10 py-7 text-xl pulse-glow-red"
            onClick={handleFinalCTAAction}
          >
            {isRegistered ? (
              <>
                <IndianRupee className="mr-2 h-6 w-6" />
                Pay ₹{price} & Book Your Spot!
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-6 w-6" />
                Register Now to Get Payment Link
              </>
            )}
          </Button>
        </motion.div>
        <p className="text-sm text-slate-400 mt-3">
          {isRegistered ? "100% Secure Payment via Razorpay. Instant Confirmation." : "Register first, then pay securely via Razorpay."}
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;