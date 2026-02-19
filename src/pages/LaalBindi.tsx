import { motion } from "framer-motion";
import { Heart, Users, Sparkles, ArrowRight } from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: "Dignity & Identity",
    description:
      "Celebrating strength, identity, and the power of self-expression through symbolic red.",
  },
  {
    icon: Users,
    title: "Community Awareness",
    description:
      "Workshops and public campaigns addressing gender equality and empowerment.",
  },
  {
    icon: Sparkles,
    title: "Breaking Stigma",
    description:
      "Encouraging open conversations and redefining narratives around women's roles in society.",
  },
];

const LaalBindiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center overflow-hidden">
        {/* Red ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-600/15 blur-[180px] rounded-full pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full border border-red-500/40 text-red-400 text-sm mb-8"
          >
            Women Empowerment Initiative
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Laal Bindi
            <span className="block text-red-500">
              A Symbol of Strength
            </span>
          </motion.h1>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A movement centered around dignity, empowerment, and the powerful
            symbolism of the red bindi — representing resilience, identity,
            and collective strength.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="
                    group
                    bg-zinc-900
                    border border-zinc-800
                    rounded-3xl
                    p-10
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-red-500/50
                    hover:shadow-red-500/10
                  "
                >
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="py-28 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            More Than a Symbol
          </h2>

          <p className="text-lg text-zinc-400 leading-relaxed">
            Laal Bindi is not just an ornament — it is a statement.
            It represents courage, identity, and the unapologetic assertion
            of one's voice. Through structured outreach and awareness
            programs, this initiative amplifies women's stories and leadership.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-red-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stand With The Movement
          </h2>

          <p className="text-red-100 mb-10">
            Participate, support, and help amplify voices that deserve to be heard.
          </p>

          <a
            href="#"
            className="
              inline-flex
              items-center
              gap-3
              px-10
              py-4
              bg-white
              text-red-600
              font-semibold
              rounded-full
              hover:-translate-y-1
              transition-all duration-300
              shadow-xl
              hover:shadow-2xl
            "
          >
            Get Involved
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default LaalBindiPage;
