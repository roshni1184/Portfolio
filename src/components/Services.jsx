import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { servicesData } from "../data/servicesData";
import { staggerContainer, fadeUp } from "../utils/motionVariants";

export default function Services() {
  return (
    <section id="services" className="section-container">
      <SectionHeading
        eyebrow="What I Offer"
        title="Services"
        subtitle="End-to-end web development services tailored to bring your ideas to life."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
