import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { experienceData } from "../data/experienceData";
import { fadeUp, slideRight, viewportOnce } from "../utils/motionVariants";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading
        eyebrow="My Journey"
        title="Work Experience"
        subtitle="A timeline of my professional experience building real-world applications."
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent sm:-translate-x-1/2" />

        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.id}
            variants={idx % 2 === 0 ? slideRight : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative pl-16 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 mb-12"
          >
            <div className="absolute left-5 sm:left-1/2 top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary -translate-x-1/2 shadow-glow z-10" />

            <div className="sm:text-right sm:pr-10">
              <span className="badge">{exp.period}</span>
            </div>

            <div className="glass-card p-6 sm:p-8 mt-4 sm:mt-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                  <p className="text-sm text-accent font-medium">{exp.company}</p>
                </div>
              </div>
              <p className="text-xs text-muted mb-4">{exp.duration}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
