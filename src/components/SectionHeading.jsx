import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../utils/motionVariants";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-14 md:mb-20">
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold text-accent mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-muted max-w-2xl mx-auto text-sm sm:text-base"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
