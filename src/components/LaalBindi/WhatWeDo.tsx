import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, BookOpen, Heart, Users } from "lucide-react";

export function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initiatives = [
    {
      icon: MessageCircle,
      title: "Awareness Sessions",
      description:
        "Interactive conversations in schools and communities, creating safe spaces for questions and dialogue."
    },
    {
      icon: BookOpen,
      title: "Menstrual Hygiene Education",
      description:
        "Comprehensive programs covering menstrual health, hygiene practices, and body literacy."
    },
    {
      icon: Heart,
      title: "Pad Distribution Drives",
      description:
        "Ensuring access to sanitary products for those who need them, removing barriers to dignity."
    },
    {
      icon: Users,
      title: "Community Conversations",
      description:
        "Engaging families, educators, and community leaders to normalize menstrual health discussions."
    }
  ];

  return (
    <section
      id="what"
      ref={ref}
      className="min-h-[75vh] flex items-center justify-center px-6 md:px-12 py-16 md:py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#2B2826] mb-14 leading-tight text-center">
            What We{" "}
            <span className="italic text-[#8B3A3A]">Do</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="group p-6 md:p-8 border border-[#2B2826]/10 hover:border-[#8B3A3A]/30 transition-all duration-400 hover:shadow-md hover:shadow-[#8B3A3A]/5"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25 }}
                className="w-12 h-12 mb-4 flex items-center justify-center"
              >
                <initiative.icon className="w-9 h-9 text-[#8B3A3A] stroke-[1.5]" />
              </motion.div>

              <h3 className="text-xl md:text-2xl text-[#2B2826] mb-3">
                {initiative.title}
              </h3>

              <p className="text-base text-[#736D6A] leading-relaxed">
                {initiative.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}