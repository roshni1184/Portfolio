import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";
import { personalData } from "../data/personalData";
import { servicesData } from "../data/servicesData";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="section-container !py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Roshni Kumari</h3>
            <p className="text-muted text-sm leading-relaxed mb-5">
              MERN Stack Developer building modern, scalable, and beautiful web applications.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: personalData.github },
                { icon: FaLinkedin, href: personalData.linkedin },
                { icon: FaTwitter, href: personalData.twitter },
                { icon: FaEnvelope, href: `mailto:${personalData.email}` },
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-white hover:border-primary/60 hover:shadow-glow transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <ScrollLink
                    to={link.id}
                    smooth
                    duration={600}
                    offset={-70}
                    className="text-muted text-sm hover:text-primary cursor-pointer transition-colors"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {servicesData.slice(0, 5).map((s) => (
                <li key={s.id} className="text-muted text-sm">{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2.5 text-muted text-sm">
              <li>{personalData.email}</li>
              <li>{personalData.phone}</li>
              <li>{personalData.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs sm:text-sm text-center">
            © {year} Roshni Kumari. All rights reserved.
          </p>
          <p className="text-muted text-xs sm:text-sm flex items-center gap-1.5">
            Built with <FaHeart className="text-red-400" /> using the MERN Stack
          </p>
        </div>
      </div>
    </footer>
  );
}
