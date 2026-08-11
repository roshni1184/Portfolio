import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaProjectDiagram, FaSmile, FaClock, FaCode } from "react-icons/fa";
import { achievementsData } from "../data/experienceData";
import { staggerContainer, fadeUp } from "../utils/motionVariants";

const icons = [FaProjectDiagram, FaSmile, FaClock, FaCode];

export default function Achievements() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
      <div className="section-container !py-0 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievementsData.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="glass-card p-6 sm:p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-xl text-white mb-4">
                  <Icon />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <CountUp end={item.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {item.suffix}
                </h3>
                <p className="text-muted text-xs sm:text-sm">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
