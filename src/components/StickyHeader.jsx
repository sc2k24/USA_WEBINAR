
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, IndianRupee } from 'lucide-react';

const StickyHeader = ({ scrollToSection, price }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={isSticky ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'py-3 bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-red-500/30' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div 
          className="text-2xl md:text-3xl font-bold cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-slate-100">USA</span><span className="usa-text-gradient">Webinar</span>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            className="button-primary-usa text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5"
            onClick={() => scrollToSection('registration-form-hero')}
          >
            <IndianRupee className="mr-1 h-4 w-4 md:h-5 md:w-5" />
            Pay ₹{price} & Join
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default StickyHeader;