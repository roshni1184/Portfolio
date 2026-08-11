import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { personalData } from "../data/personalData";

// 👇 Apni profile image import karo
import profileImage from "../assets/images/profileimage.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-background">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] rounded-full bg-secondary/30 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-accent/20 blur-3xl"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]"></div>
      </div>

      <div className="section-container !py-0 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <span className="inline-block px-5 py-2 rounded-full glass text-sm mb-5">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
            Hi, I'm{" "}
            <span className="gradient-text">
              {personalData.name}
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mb-6 h-10">
            <TypeAnimation
              sequence={personalData.roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </div>

          <p className="text-muted text-lg leading-relaxed max-w-xl mb-8">
            {personalData.intro}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

           <a
  href="https://drive.google.com/file/d/1Zkc8tEkV-xjA-1Gx3ZW6n2TgE2mXL4Ig/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  View Resume
</a>

            <ScrollLink
              to="contact"
              smooth
              duration={600}
              offset={-70}
              className="btn-outline cursor-pointer"
            >
              <FaEnvelope />
              Contact Me
            </ScrollLink>

          </div>

          <div className="flex gap-4 mt-8 justify-center lg:justify-start">

            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="order-1 lg:order-2 flex justify-center"
>
  <div className="relative">

    {/* Animated Glow */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-2xl opacity-40 scale-110"
    />

    {/* Gradient Border */}
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full p-[6px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.5)]">

      {/* Image */}
      <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">

        <img
          src={profileImage} // ya personalData.profileImage
          alt={personalData.name}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            object-top
            scale-[0.92]
            rounded-full
          "
        />

      </div>

    </div>

    {/* Floating Badge */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute -top-3 -right-3 glass rounded-xl px-4 py-2 text-sm font-semibold"
    >
      💻 MERN Stack
    </motion.div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity }}
      className="absolute -bottom-3 -left-3 glass rounded-xl px-4 py-2 text-sm font-semibold"
    >
      🚀 1+ Year Exp
    </motion.div>

  </div>
</motion.div>

        
      </div>
      {/* Profile Image */}

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-3xl"
      >
        <ScrollLink
          to="about"
          smooth
          duration={600}
          offset={-70}
          className="cursor-pointer"
        >
          <HiOutlineChevronDoubleDown />
        </ScrollLink>
      </motion.div>

    </section>
  );
}