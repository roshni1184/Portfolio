import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { personalData } from "../data/personalData";
import { slideRight, slideLeft, viewportOnce } from "../utils/motionVariants";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      // Replace with your actual API endpoint / EmailJS / Formspree integration
      // Example: await axios.post('https://your-api.com/contact', form);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Contact Me"
        subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Contact info */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-2 space-y-6"
        >
          {[
            { icon: FaEnvelope, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
            { icon: FaPhoneAlt, label: "Phone", value: personalData.phone, href: `tel:${personalData.phone.replace(/\s/g, "")}` },
            { icon: FaMapMarkerAlt, label: "Location", value: personalData.location, href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="glass-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                <Icon />
              </div>
              <div>
                <p className="text-xs text-muted">{label}</p>
                {href ? (
                  <a href={href} className="text-white font-medium hover:text-primary transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-4 pt-2">
            {[
              { icon: FaGithub, href: personalData.github },
              { icon: FaLinkedin, href: personalData.linkedin },
              { icon: FaTwitter, href: personalData.twitter },
            ].map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-white hover:border-primary/60 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden glass h-56">
            <iframe
              title="Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.7,28.4,77.5,28.9&layer=mapnik"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) invert(0.92) contrast(0.9)" }}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 glass-card p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-muted mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  errors.name ? "border-red-500" : "border-white/10"
                } text-white placeholder-muted/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm text-muted mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                  errors.email ? "border-red-500" : "border-white/10"
                } text-white placeholder-muted/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm text-muted mb-2" htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                errors.subject ? "border-red-500" : "border-white/10"
              } text-white placeholder-muted/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all`}
            />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-sm text-muted mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                errors.message ? "border-red-500" : "border-white/10"
              } text-white placeholder-muted/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <FaPaperPlane />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-emerald-400 text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">✗ Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
