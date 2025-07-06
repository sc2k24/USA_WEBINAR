
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = ({ price }) => {
  const faqData = [
    {
      question: `What is the fee for this webinar?`,
      answer: `The webinar fee is a one-time payment of ₹${price}. This gives you full access to the live session, Q&A, and all post-webinar resources.`
    },
    {
      question: "What if I can't attend live after paying?",
      answer: "We strongly encourage live attendance for the interactive Q&A. However, all paid attendees will receive access to the webinar recording and resource materials within 24-48 hours after the live session."
    },
    {
      question: "Who is this webinar for?",
      answer: "This webinar is for students (and their parents) who are planning to study in the USA for their Bachelor's, Master's, or PhD degrees. It's suitable for those starting their research or those already in the application process."
    },
    {
      question: "Will I get personalized advice?",
      answer: "The webinar includes a dedicated Q&A session where Sachin will answer many common and specific questions. For highly personalized, one-on-one strategic planning, details about consultation services will be shared during the webinar."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, debit cards, UPI, and other popular payment methods through our secure Stripe payment gateway."
    },
    {
      question: "Is there a refund policy?",
      answer: "Due to the digital nature of the content and immediate access to resources upon payment, we generally do not offer refunds. However, if you face any technical issues or have concerns, please reach out to our support team."
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 usa-gradient-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="usa-text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="faq-item border border-red-500/30"
            >
              <button
                className="faq-question text-slate-100 hover:text-red-400 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <ChevronUp className="h-5 w-5 text-red-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="faq-answer pt-3">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;