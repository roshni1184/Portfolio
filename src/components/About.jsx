import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaGraduationCap, FaBriefcase, FaBullseye, FaCheckCircle } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { personalData, statsData } from "../data/personalData";
import { fadeUp, slideRight, viewportOnce } from "../utils/motionVariants";

export default function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        eyebrow="Get To Know"
        title="About Me"
        subtitle="A quick introduction to who I am, what I do, and what drives me as a developer."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {personalData.about.map((para, idx) => (
            <p key={idx} className="text-muted leading-relaxed mb-4 text-sm sm:text-base">
              {para}
            </p>
          ))}

          <div className="flex flex-wrap gap-3 mt-6 mb-8">
            {personalData.highlights.map((h) => (
              <span key={h} className="badge flex items-center gap-1.5">
                <FaCheckCircle className="text-accent" /> {h}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2 text-primary">
                <FaGraduationCap className="text-xl" />
                <h4 className="font-semibold text-white">Education</h4>
              </div>
              <p className="text-muted text-sm">B.Tech in Computer Science & Engineering</p>
            </div>
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2 text-secondary">
                <FaBriefcase className="text-xl" />
                <h4 className="font-semibold text-white">Experience</h4>
              </div>
              <p className="text-muted text-sm">1+ Year as Full Stack Developer @ PSS Techno Service</p>
            </div>
            <div className="glass-card p-5 sm:col-span-2">
              <div className="flex items-center gap-3 mb-2 text-accent">
                <FaBullseye className="text-xl" />
                <h4 className="font-semibold text-white">Career Objective</h4>
              </div>
              <p className="text-muted text-sm">{personalData.careerObjective}</p>
            </div>
          </div>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-5"
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={idx * 0.15}
              className="glass-card p-6 sm:p-8 text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </h3>
              <p className="text-muted text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            custom={0.6}
            className="col-span-2 glass-card p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
            <h4 className="font-semibold mb-2 text-white">Let's build something great</h4>
            <p className="text-muted text-sm">
              Always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
