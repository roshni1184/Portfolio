import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        <ScrollLink
          to="home"
          smooth
          duration={600}
          className="cursor-pointer text-xl sm:text-2xl font-bold gradient-text"
        >
          Roshni Kumari
        </ScrollLink>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth
                duration={600}
                offset={-80}
                spy
                className={`nav-link ${activeId === item.id ? "active" : ""}`}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <ScrollLink
          to="contact"
          smooth
          duration={600}
          offset={-80}
          className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm cursor-pointer"
        >
          Hire Me
        </ScrollLink>

        <button
          className="lg:hidden text-2xl text-white z-50"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden glass mx-4 mt-4 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    smooth
                    duration={600}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    className="nav-link text-base cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
