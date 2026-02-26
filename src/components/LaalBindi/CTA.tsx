import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Users, Heart } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const actions = [
    {
      icon: Users,
      title: "Collaborate with Us",
      description: "Partner with us to bring awareness to your community",
      href: "mailto:contact@vinitabhedyafoundation.org?subject=Collaboration Inquiry - Laal Bindi"
    },
    {
      icon: Mail,
      title: "Invite a Session",
      description: "Bring Laal Bindi to your school or organization",
      href: "mailto:contact@vinitabhedyafoundation.org?subject=Session Request - Laal Bindi"
    },
    {
      icon: Heart,
      title: "Support the Cause",
      description: "Help us expand our reach and impact",
      href: "mailto:contact@vinitabhedyafoundation.org?subject=Support Inquiry - Laal Bindi"
    }
  ];

  return (
    <section
      id="involved"
      ref={ref}
      className="min-h-[75vh] flex items-center justify-center px-6 md:px-12 py-16 md:py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#2B2826] mb-6 leading-tight">
            Join the{" "}
            <span className="italic text-[#8B3A3A]">Movement</span>
          </h2>

          <p className="text-lg md:text-xl text-[#736D6A] max-w-xl mx-auto leading-relaxed">
            Every conversation matters. Every action counts. Together, we can create a world where
            menstruation is met with understanding, not stigma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-14">
          {actions.map((action, index) => (
            <motion.a
              key={index}
              href={action.href}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -3 }}
              className="group p-6 md:p-8 border-2 border-[#2B2826] hover:bg-[#2B2826] transition-all duration-400 text-center block"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.25 }}
                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
              >
                <action.icon className="w-9 h-9 text-[#8B3A3A] group-hover:text-[#A85555] stroke-[1.5] transition-colors duration-400" />
              </motion.div>

              <h3 className="text-lg md:text-xl text-[#2B2826] group-hover:text-[#FAF8F5] mb-2 transition-colors duration-400">
                {action.title}
              </h3>

              <p className="text-sm text-[#736D6A] group-hover:text-[#E8E4DF] leading-relaxed transition-colors duration-400">
                {action.description}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-[#736D6A] text-sm md:text-base mb-4">
            For inquiries, partnerships, or more information
          </p>
          <a
            href="mailto:contact@vinitabhedyafoundation.org"
            className="text-[#8B3A3A] hover:text-[#A85555] text-base md:text-lg transition-colors duration-300 underline underline-offset-4"
          >
            contact@vinitabhedyafoundation.org
          </a>
        </motion.div>
      </div>
    </section>
  );
}