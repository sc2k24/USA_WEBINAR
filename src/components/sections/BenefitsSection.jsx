import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, DollarSign, Users, Briefcase} from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: "Scholarships & Funding Tips",
    description: "Discover how to secure financial aid and scholarships to make your US education affordable."
  },
  {
    icon: Users,
    title: "Visa Interview Success",
    description: "Master proven strategies to ace your F1 visa interview with confidence."
  },
  {
    icon: Award,
    title: "Best Universities For You",
    description: "Learn to identify and shortlist US universities that perfectly match your academic profile and career goals."
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Application",
    description: "Get a clear breakdown of the entire US university application process, from start to finish."
  },
  {
    icon: Briefcase,
    title: "H1B Registration and Jobs",
    description: "Get a curated and exhaustive list of employers hiring H1B workers actively."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 px-4 bg-slate-900/70">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What You Will <span className="usa-text-gradient">Gain</span> From This Webinar
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Actionable insights and expert guidance to navigate your journey to studying in the USA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(239, 68, 68, 0.2)" }}
              className="h-full"
            >
              <Card className="glass-effect-usa border-red-500/30 h-full transition-all duration-300">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="mb-5 flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg">
                      <benefit.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-100">{benefit.title}</h3>
                  <p className="text-slate-300 text-sm md:text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;