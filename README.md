# Roshni Kumari — MERN Stack Developer Portfolio

A modern, premium, fully responsive developer portfolio built with **React.js**, **Tailwind CSS**, **React Router**, **Framer Motion**, and **React Icons**.

## ✨ Features

- Dark + gradient premium theme with glassmorphism cards
- Animated hero with typing effect, floating gradient blobs, and social links
- Scroll-reveal animations (fade up, slide, zoom) throughout
- Animated statistics & counters (React CountUp)
- Skills section with category tabs + animated progress bars
- Timeline-based Experience & Education sections
- Filterable project cards (Full Stack / Frontend / Backend)
- Services grid, Testimonials slider (Swiper), validated Contact form + map
- Loading screen, scroll-to-top button, custom cursor (desktop), scroll-spy navbar
- Fully responsive, mobile-first, SEO-friendly, production-ready code

## 🛠 Tech Stack

React 18 · Vite · Tailwind CSS · React Router DOM · Framer Motion · React Icons ·
Swiper · React Type Animation · React CountUp · React Scroll · Axios

## 📦 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

The app runs at `http://localhost:5173` by default.

## 🎨 Customization Guide

All content lives in `src/data/` — edit these files to personalize the site, no need to touch components:

| File | Controls |
|---|---|
| `src/data/personalData.js` | Name, role, intro, email, phone, resume link, social links, about text, stats |
| `src/data/skillsData.js` | Skills by category with proficiency levels |
| `src/data/experienceData.js` | Work experience, education, achievements |
| `src/data/projectsData.js` | Project cards (image, description, tech, links) |
| `src/data/servicesData.js` | Services offered + testimonials |

### Replace images
- **Profile photo:** add your image to `public/assets/images/profile.jpg` (path referenced in `personalData.js`). If missing, an auto-generated avatar placeholder is shown.
- **Resume:** add your PDF as `public/resume.pdf` (the Download Resume button links to `/resume.pdf`).
- **Project images:** replace the Unsplash URLs in `projectsData.js` with your own screenshots.

### Colors
Edit the color palette in `tailwind.config.js` under `theme.extend.colors` — all components use these tokens (`primary`, `secondary`, `accent`, `background`, `card`, `muted`).

### Contact form
The form in `src/components/Contact.jsx` currently simulates a submission. Wire it up to a real backend/API (e.g., your own Express/MongoDB endpoint, EmailJS, or Formspree) inside the `handleSubmit` function — an Axios example is commented in the code.

### Google Map
Replace the `iframe src` in `Contact.jsx` with your own location's embed URL (Google Maps or OpenStreetMap).

## 📁 Folder Structure

```
src/
 ├── assets/          # Images & static assets
 ├── components/      # Reusable UI components (Navbar, Hero, About, Skills, etc.)
 ├── pages/            # Route-level pages (Home, NotFound)
 ├── layouts/          # MainLayout (Navbar + Footer wrapper)
 ├── hooks/            # useActiveSection, useMousePosition
 ├── context/          # AppContext (global state)
 ├── data/             # All editable content (single source of truth)
 ├── utils/            # Framer Motion animation variants
 ├── App.jsx
 └── main.jsx
```

## 🚀 Deployment

This project deploys seamlessly to **Vercel**, **Netlify**, or **Render**:

```bash
npm run build
# Deploy the generated "dist" folder
```

- **Vercel:** Import the repo → Framework Preset: Vite → Build Command: `npm run build` → Output: `dist`
- **Netlify:** Build command `npm run build`, publish directory `dist`

## 📬 Contact

- Email: rp3225363@gmail.com
- Phone: +91 9508001184

---

Built with ❤️ using the MERN ecosystem.
