import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Foundation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-16 md:py-20 bg-[#E8E4DF]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-center"
      >
        <div className="mb-6">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#8B3A3A] rounded-full mx-auto mb-6" />
        </div>

        <p className="text-lg md:text-xl text-[#736D6A] mb-4 uppercase tracking-widest">
          An Initiative By
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2B2826] mb-8 leading-tight">
          Vinit Abhedya Foundation
        </h2>

        <div className="max-w-2xl mx-auto space-y-4 text-base md:text-lg text-[#2B2826] leading-relaxed">
          <p className="opacity-90">
            The Vinit Abhedya Foundation is dedicated to creating meaningful social impact through
            education, awareness, and community empowerment.
          </p>

          <p className="opacity-90">
            Laal Bindi represents our commitment to addressing critical yet overlooked issues with
            sensitivity, dignity, and sustainable solutions.
          </p>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "3rem" } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-0.5 bg-[#8B3A3A] mt-8 mx-auto"
        />
      </motion.div>
    </section>
  );
}