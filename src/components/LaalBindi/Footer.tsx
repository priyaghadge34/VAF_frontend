import { motion } from "framer-motion";
export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 md:py-16 border-t border-[#2B2826]/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-[#8B3A3A] rounded-full" />
            <span className="text-[#2B2826] text-lg">Laal Bindi</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#736D6A] text-sm text-center md:text-right"
          >
            <p>© 2026 Vinit Abhedya Foundation. All rights reserved.</p>
            <p className="mt-1">Breaking stigma. Building dignity.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
