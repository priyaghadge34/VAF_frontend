import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const voices = [
    {
      quote:
        "For the first time, I felt like my questions weren't shameful. I learned that periods are normal, and that understanding my body is my right.",
      author: "A student from a rural school session",
      location: "Maharashtra"
    },
    {
      quote:
        "Laal Bindi didn't just teach us about hygiene—it gave us permission to speak. Now I can talk to my daughter openly about things my mother never discussed with me.",
      author: "A mother from a community workshop",
      location: "Rajasthan"
    }
  ];

  return (
    <section
      ref={ref}
      className="min-h-[75vh] flex items-center justify-center px-6 md:px-12 py-16 md:py-20"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#2B2826] mb-14 leading-tight text-center">
            Voices of{" "}
            <span className="italic text-[#8B3A3A]">Change</span>
          </h2>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {voices.map((voice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-2 md:-left-3 top-0 w-1 h-full bg-gradient-to-b from-[#8B3A3A] to-transparent opacity-30" />

              <div className="pl-6 md:pl-10">
                <p className="text-xl md:text-2xl lg:text-3xl text-[#2B2826] leading-relaxed mb-6 italic">
                  "{voice.quote}"
                </p>

                <div className="space-y-1">
                  <p className="text-base md:text-lg text-[#736D6A]">
                    — {voice.author}
                  </p>
                  <p className="text-sm md:text-base text-[#8B3A3A]">
                    {voice.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block w-12 h-0.5 bg-[#8B3A3A]" />
        </motion.div>
      </div>
    </section>
  );
}