import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Vinit Abhedya",
    role: "Founder & President",
    initials: "VA",
    bio: "Visionary leader driving community transformation through grassroots activism.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Head of Operations",
    initials: "SK",
    bio: "Ensures seamless coordination across initiatives and volunteer programs.",
  },
  {
    name: "Amit Rathore",
    role: "Ploggers Lead",
    initials: "AR",
    bio: "Environmental advocate leading the Sambhajinagar Ploggers movement.",
  },
  {
    name: "Meera Joshi",
    role: "Laal Bindi Coordinator",
    initials: "MJ",
    bio: "Championing women's empowerment through impactful community campaigns.",
  },
];

const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Subtle ambient background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-200/30 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight">
            Meet Our Leadership
          </h2>
          <p className="text-emerald-700 mt-4 text-lg max-w-2xl mx-auto">
            Dedicated individuals driving impact with purpose and clarity.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="
                group
                bg-white
                border border-emerald-100
                rounded-3xl
                p-8
                text-center
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:scale-110 shadow-md">
                  {member.initials}
                </div>

                {/* subtle ring */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-200 group-hover:border-emerald-400 transition-colors duration-300"></div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-emerald-900">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-medium text-emerald-600 mt-1 mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social */}
              <div className="flex items-center justify-center gap-4">
                {[Linkedin, Twitter, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="
                      w-9 h-9
                      flex items-center justify-center
                      rounded-full
                      bg-emerald-50
                      text-emerald-600
                      transition-all duration-300
                      hover:bg-emerald-600
                      hover:text-white
                      hover:-translate-y-1
                    "
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
