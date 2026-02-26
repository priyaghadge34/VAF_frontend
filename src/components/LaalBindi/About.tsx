import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "4rem" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 bg-[#8B3A3A] mb-12"
        />
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#2B2826] mb-12 leading-tight">
          About <span className="italic">Laal Bindi</span>
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-[#2B2826] leading-relaxed">
          <p className="opacity-90">
            Laal Bindi is more than an initiative. It's a movement rooted in dignity, education, and openness. 
            We believe that menstruation is not a subject to be hidden or whispered about—it's a natural, 
            fundamental part of life that deserves respect and understanding.
          </p>
          
          <p className="opacity-90">
            Born from countless conversations with women and girls across communities, Laal Bindi addresses 
            the deep-rooted stigma that surrounds periods in India. Through awareness sessions, education programs, 
            and community engagement, we're creating spaces where questions are welcomed and knowledge is shared freely.
          </p>
          
          <p className="opacity-90">
            The red bindi—traditionally a symbol of strength and identity—represents our commitment to 
            transforming shame into confidence, silence into conversation, and stigma into support.
          </p>
        </div>
      </motion.div>
    </section>
  );
}