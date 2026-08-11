import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { educationData } from "../data/experienceData";
import { slideLeft, viewportOnce } from "../utils/motionVariants";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <SectionHeading
        eyebrow="Academic Background"
        title="Education"
        subtitle="My educational journey and professional certifications."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.id}
            variants={slideLeft}
            custom={idx * 0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row gap-5"
          >
            <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center text-2xl text-white">
              <FaGraduationCap />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                <span className="badge">{edu.duration}</span>
              </div>
              <p className="text-accent text-sm font-medium mb-2">{edu.institute}</p>
              <p className="text-muted text-sm leading-relaxed">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
