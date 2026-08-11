import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillsData } from "../data/skillsData";
import { staggerContainer, fadeUp, viewportOnce } from "../utils/motionVariants";

const categories = Object.keys(skillsData);

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section-container">
      <SectionHeading
        eyebrow="What I Know"
        title="My Skills"
        subtitle="Technologies and tools I use to design, build, and ship full-stack applications."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              active === cat
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow"
                : "glass text-muted hover:text-white hover:border-primary/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -10 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData[active].map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass"
                    style={{ color: skill.color }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{skill.name}</h4>
                    <span className="text-xs text-muted">{skill.level}% Proficiency</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={viewportOnce}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
