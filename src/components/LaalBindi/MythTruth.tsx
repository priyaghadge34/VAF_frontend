import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function MythTruth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [revealedItems, setRevealedItems] = useState<Set<number>>(new Set());

  const mythTruths = [
    {
      myth: "Menstruating women shouldn't touch plants or food",
      truth:
        "Menstruation has no negative effect on plants, food, or cooking. This is a harmful superstition rooted in stigma."
    },
    {
      myth: "Periods are impure and shameful",
      truth:
        "Menstruation is a natural, healthy biological process. There is nothing impure or shameful about it."
    },
    {
      myth: "Girls shouldn't exercise during their period",
      truth:
        "Physical activity during periods is safe and can actually help reduce cramps and improve mood."
    },
    {
      myth: "Talking about periods is inappropriate",
      truth:
        "Open conversations about menstrual health are essential for education, dignity, and breaking stigma."
    }
  ];

  const toggleReveal = (index: number) => {
    setRevealedItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  return (
    <section
      ref={ref}
      className="min-h-[75vh] flex items-center justify-center px-6 md:px-12 py-16 md:py-20 bg-[#2B2826]"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#FAF8F5] mb-6 leading-tight text-center">
            Myth vs{" "}
            <span className="italic text-[#8B3A3A]">Truth</span>
          </h2>

          <p className="text-center text-[#E8E4DF] text-lg mb-10">
            Click on any myth to reveal the truth
          </p>
        </motion.div>

        <div className="space-y-5 md:space-y-6">
          {mythTruths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              onClick={() => toggleReveal(index)}
              className="cursor-pointer group"
            >
              <div className="relative p-5 md:p-6 border border-[#FAF8F5]/20 hover:border-[#8B3A3A]/50 transition-all duration-400">
                <motion.div
                  animate={{
                    opacity: revealedItems.has(index) ? 0.4 : 1,
                    filter: revealedItems.has(index) ? "blur(2px)" : "blur(0px)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-sm text-[#8B3A3A] uppercase tracking-wider mb-1 block">
                    Myth
                  </span>
                  <p className="text-lg md:text-xl text-[#FAF8F5] leading-relaxed">
                    {item.myth}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{
                    opacity: revealedItems.has(index) ? 1 : 0,
                    height: revealedItems.has(index) ? "auto" : 0,
                    marginTop: revealedItems.has(index) ? "1rem" : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <span className="text-sm text-[#A85555] uppercase tracking-wider mb-1 block">
                    Truth
                  </span>
                  <p className="text-lg md:text-xl text-[#E8E4DF] leading-relaxed">
                    {item.truth}
                  </p>
                </motion.div>

                <div className="absolute top-5 right-5 text-[#8B3A3A] text-lg">
                  {revealedItems.has(index) ? "×" : "+"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}