import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Aisha Khan",
    university: "Stanford University",
    quote: "This webinar was a game-changer! Sachin's insights on SOPs and LORs helped me get into my dream university. The visa tips were spot on!",
    imageName: "Aisha Khan, student at Stanford University",
    rating: 5
  },
  {
    name: "Rohan Verma",
    university: "University of Illinois Urbana-Champaign",
    quote: "I was so confused about the application process. This webinar simplified everything. Highly recommend for anyone aiming for US universities.",
    imageName: "Rohan Verma, student at University of Illinois",
    rating: 5
  },
  {
    name: "Priya Singh",
    university: "University of California, Berkeley",
    quote: "The scholarship strategies discussed were invaluable. I managed to secure a significant scholarship thanks to the tips shared. Thank you, Sachin!",
    imageName: "Priya Singh, student at UC Berkeley",
    rating: 5
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-slate-900/70">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hear From Our <span className="usa-text-gradient">Successful Students</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Real stories from students who attended our webinar and achieved their US study dreams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(239, 68, 68, 0.15)" }}
              className="h-full"
            >
              <Card className="glass-effect-usa border-red-500/30 h-full flex flex-col">
                <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <img  
                      className="w-14 h-14 rounded-full mr-4 object-cover" 
                      alt={testimonial.imageName}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div>
                      <h4 className="font-bold text-lg text-slate-100">{testimonial.name}</h4>
                      <p className="text-sm text-red-300">{testimonial.university}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic text-sm md:text-base flex-grow">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;