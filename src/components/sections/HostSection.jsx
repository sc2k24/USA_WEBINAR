import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const HostSection = () => {
  return (
    <section id="host" className="py-16 md:py-24 px-4 usa-gradient-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet Your <span className="usa-text-gradient">Expert Host</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect-usa border-red-500/30 max-w-3xl mx-auto overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img  
                  className="h-64 w-full object-cover md:w-64" 
                  alt="Sachin Choudhary – Robotics Expert | NIT Alum | MS USA | GRE Top Scorer"
                 src="https://images.unsplash.com/photo-1750089052103-691dfb53655d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="p-6 md:p-8">
                <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">Sachin Choudhary – Robotics Expert | NIT Alum | MS USA | GRE Top Scorer</div>
                <h3 className="block mt-1 text-2xl md:text-3xl leading-tight font-bold text-slate-100">Sachin Choudhary</h3>
                <p className="mt-4 text-slate-300">
                  With over 11 years of experience, Sachin has guided hundreds of students to secure admissions at top US universities. His expertise spans the entire journey—from building standout profiles and selecting the right universities to cracking visa interviews, securing scholarships, and navigating the job market and the H1B process.
                </p>
                <p className="mt-3 text-slate-300">
                  Sachin is passionate about demystifying the US study abroad process and empowering students to achieve their academic dreams.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HostSection;