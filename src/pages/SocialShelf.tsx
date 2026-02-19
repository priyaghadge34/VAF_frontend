import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles, ArrowRight } from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Open Community Library",
    description:
      "A free-access bookshelf initiative encouraging reading culture in public spaces.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Citizens donate and borrow books, creating a self-sustained knowledge ecosystem.",
  },
  {
    icon: Sparkles,
    title: "Knowledge Sharing",
    description:
      "Promotes curiosity, awareness, and lifelong learning across all age groups.",
  },
];

const SocialShelfPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#4B3F2F]">

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center overflow-hidden">
        {/* Warm yellow ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-400/20 blur-[180px] rounded-full pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-yellow-300/30 border border-yellow-400/40 text-yellow-700 text-sm mb-8"
          >
            Knowledge Initiative
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Social Shelf
            <span className="block text-yellow-600">
              Share a Book. Spark a Mind.
            </span>
          </motion.h1>

          <p className="text-lg text-[#6B5E4B] max-w-2xl mx-auto leading-relaxed">
            A public bookshelf movement designed to make books accessible to everyone.
            Donate a book. Borrow a story. Build a smarter community.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24">
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
                    bg-white/60
                    backdrop-blur-md
                    border border-yellow-200
                    rounded-3xl
                    p-10
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-yellow-200/50 group-hover:bg-yellow-300/60 transition-colors">
                    <Icon className="w-7 h-7 text-yellow-700" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-[#6B5E4B] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-28 bg-[#EFE6D8] text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            How It Works
          </h2>

          <p className="text-lg text-[#6B5E4B] leading-relaxed">
            Donate a book to the Social Shelf installed in public areas.
            Anyone can borrow, read, and return it — no registration, no barriers.
            The system thrives on trust, participation, and shared responsibility.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-200/20" />

        <div className="relative container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contribute to the Shelf
          </h2>

          <p className="text-[#6B5E4B] mb-10">
            Your unused books can inspire someone else’s journey.
          </p>

          <a
            href="#"
            className="
              inline-flex
              items-center
              gap-3
              px-10
              py-4
              bg-yellow-500
              text-white
              font-semibold
              rounded-full
              hover:bg-yellow-600
              hover:-translate-y-1
              transition-all duration-300
              shadow-lg
            "
          >
            Donate a Book
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default SocialShelfPage;
