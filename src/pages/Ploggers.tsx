import { motion } from "framer-motion";
import { MapPin, Users, Leaf, ArrowRight } from "lucide-react";
import React from "react";

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: "300+", label: "Active Volunteers" },
  { icon: Leaf, value: "120+", label: "Clean-up Drives" },
  { icon: MapPin, value: "25+", label: "Locations Covered" },
];

const PloggersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative py-32 overflow-hidden text-center">
        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-sm mb-8"
          >
            Environmental Initiative
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Sambhajinagar
            <span className="block text-emerald-400">
              Ploggers Movement
            </span>
          </motion.h1>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A community-driven movement combining fitness and sustainability.
            We run. We clean. We build a greener future together.
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
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
                    text-center
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-emerald-500/40
                    hover:shadow-emerald-500/10
                  "
                >
                  <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>

                  <h3 className="text-4xl font-bold mb-2 text-white">
                    {stat.value}
                  </h3>

                  <p className="text-zinc-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What is Plogging?
          </h2>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Plogging is a global sustainability movement that combines jogging
            with litter collection. Our initiative mobilizes citizens to take
            ownership of public spaces while improving physical health.
            Structured weekly drives ensure consistent impact across the city.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-emerald-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join The Next Drive
          </h2>

          <p className="text-emerald-100 mb-10">
            Become part of a growing community committed to fitness,
            sustainability, and measurable environmental impact.
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
              text-emerald-700
              font-semibold
              rounded-full
              hover:-translate-y-1
              transition-all duration-300
              shadow-xl
              hover:shadow-2xl
            "
          >
            Register for Upcoming Drive
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default PloggersPage;
