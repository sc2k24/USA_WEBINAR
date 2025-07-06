
import React, { useState } from 'react';
import { X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AlertBanner = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="alert-banner relative flex items-center justify-center"
        >
          <Zap className="h-5 w-5 mr-2 text-yellow-300" />
          <p>{message}</p>
          <button 
            onClick={() => setIsVisible(false)} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-red-800 p-1 rounded-full transition-colors"
            aria-label="Dismiss alert"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertBanner;