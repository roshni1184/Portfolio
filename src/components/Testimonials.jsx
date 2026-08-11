import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { testimonialsData } from "../data/servicesData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container">
      <SectionHeading
        eyebrow="Client Feedback"
        title="Testimonials"
        subtitle="What people I've worked with have to say about my work."
      />

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-14"
      >
        {testimonialsData.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="glass-card p-8 h-full flex flex-col">
              <FaQuoteLeft className="text-3xl text-primary/40 mb-4" />
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{t.text}</p>
              <div className="flex items-center gap-1 mb-4 text-amber-400 text-sm">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/40"
                />
                <div>
                  <h4 className="font-semibold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
