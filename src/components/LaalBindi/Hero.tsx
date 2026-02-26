import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12">
      {/* Abstract visual - symbolic bindi */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute top-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#8B3A3A] to-[#A85555] opacity-20 blur-3xl"
      />
      
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-3 h-3 md:w-4 md:h-4 bg-[#8B3A3A] rounded-full mx-auto mb-12 md:mb-16"
        />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#2B2826] mb-6 leading-tight tracking-tight">
          Periods are normal.
          <br />
          <span className="text-[#8B3A3A] italic">Silence isn't.</span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-lg md:text-xl text-[#736D6A] max-w-2xl mx-auto leading-relaxed">

          Breaking the stigma around menstruation through education, 
          conversation, and compassion.          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
