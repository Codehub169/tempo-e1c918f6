'use client';

import React from 'react';
import { motion }_from_ 'framer-motion';
import { Palette, Package, MessageSquare, Printer, BookOpen, Sparkles }_from_ 'lucide-react';

const services = [
  {
    icon: Palette,
    name: 'Branding',
    description: 'Logos that linger, identities that resonate.',
  },
  {
    icon: Package,
    name: 'Packaging',
    description: 'Packaging, but make it poetic (and irresistible).',
  },
  {
    icon: MessageSquare,
    name: 'Social Media',
    description: 'Scroll-stopping visuals for your digital story.',
  },
  {
    icon: Printer,
    name: 'Stationery',
    description: 'Tactile treasures that tell your brand tale.',
  },
  {
    icon: BookOpen,
    name: 'Coffee Table Books',
    description: 'Curating narratives into keepsake volumes.',
  },
  {
    icon: Sparkles,
    name: 'Creative Projects',
    description: 'Your unique vision, brought to vivid life.',
  },
];

const ServicesSection = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section 
      id="services"
      className="py-20 md:py-32 bg-neutral-100 text-neutral-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4 text-center">
            What We Weave
          </h2>
          <p className="font-body text-lg text-neutral-700 mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            From foundational branding to delightful details, we craft visual narratives that connect and captivate. Each design is a thoughtful blend of hue and neu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.name}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-transparent hover:border-accent/30"
                custom={index}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="p-4 bg-accent/10 rounded-full mb-6 inline-block">
                  <IconComponent className="w-10 h-10 text-accent" strokeWidth={1.5}/>
                </div>
                <h3 className="font-display text-2xl text-primary mb-3">{service.name}</h3>
                <p className="font-body text-neutral-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
