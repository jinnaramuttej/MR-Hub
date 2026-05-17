import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import campusImg from "@/assets/campus.jpg";
import { mentors, news, testimonials } from "@/lib/site-data";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const testimonialImages = [
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
];

const investorTestimonials = testimonials.map((testimonial, index) => ({
  quote: testimonial.quote,
  name: testimonial.name,
  designation: testimonial.role,
  src: testimonialImages[index % testimonialImages.length],
}));

export default function HomeBottomSections() {
  return (
    <>
      <MentorsPreview />
      <Investors />
      <Press />
      <FinalCTA />
    </>
  );
}

function MentorsPreview() {
  return (
    <section className="py-24 lg:py-32 border-b border-border bg-ink/[0.01]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <div className="absolute -inset-4 rounded-2xl bg-brand/10 blur-xl opacity-50" />
          <img
            src={campusImg}
            alt="Campus"
            className="relative w-full h-auto rounded-[2rem] border border-border shadow-2xl"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">Mentor Network</p>
          <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-ink leading-[0.9]">
            120+ Operators <br /> on Speed-Dial<span className="text-brand">.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
            Founders in our programs get unlimited 1:1 access to the people who already built what you're building.
          </p>
          <div className="mt-10 flex -space-x-3">
            {mentors.slice(0, 6).map((mentor) => (
              <div
                key={mentor.id}
                className="h-14 w-14 rounded-full border-4 border-background grid place-items-center font-display text-sm text-white shadow-xl"
                style={{ background: mentor.tone }}
              >
                {mentor.initials}
              </div>
            ))}
            <div className="h-14 w-14 rounded-full border-4 border-background bg-secondary grid place-items-center text-xs font-black text-ink shadow-xl">
              +114
            </div>
          </div>
          <Link to="/mentors" className="mt-10 inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-ink hover:text-brand transition-colors">
            Meet the Network <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Investors() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">For Capital Partners</p>
          <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-ink leading-[0.9]">
            Access the Hub's <br /> Alpha Pipeline<span className="text-brand">.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
            Curated deal flow, structured data rooms, and direct lines to the most promising student founders in the country.
          </p>
          <Link to="/investors" className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-white px-8 py-4 font-bold transition-all hover:scale-105 shadow-xl">
            Apply as Investor <ArrowRight size={18} />
          </Link>
        </div>
        <div className="lg:col-span-7 relative">
          <CircularTestimonials
            testimonials={investorTestimonials}
            autoplay={true}
            colors={{
              name: "var(--color-ink)",
              designation: "var(--color-brand)",
              testimony: "var(--color-muted-foreground)",
              arrowBackground: "var(--color-secondary)",
              arrowForeground: "var(--color-ink)",
              arrowHoverBackground: "var(--color-brand)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function Press() {
  return (
    <section className="py-24 lg:py-32 border-b border-border bg-ink/[0.01]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-10 mb-16">
          <h2 className="font-display text-4xl text-ink">
            In The Press<span className="text-brand">.</span>
          </h2>
          <Link to="/about" className="text-sm font-black uppercase tracking-widest text-ink hover:text-brand transition-colors">
            Archive
          </Link>
        </div>
        <div className="space-y-4">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group py-6 lg:py-8 grid grid-cols-12 gap-8 items-center border-b border-border last:border-0 hover:bg-white transition-colors px-6 -mx-6 rounded-2xl"
            >
              <p className="col-span-12 lg:col-span-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{item.source}</p>
              <p className="col-span-12 lg:col-span-8 font-display text-xl lg:text-2xl text-ink group-hover:text-brand transition-colors">{item.title}</p>
              <p className="col-span-12 lg:col-span-2 text-sm text-muted-foreground lg:text-right font-medium">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand/10 blur-[150px] -z-10" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-6">Limited Cohort Slots</p>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl tracking-tighter text-ink leading-[0.85] mb-12">
            Build the <br /> Future with Us<span className="text-brand">.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-16 leading-relaxed">
            Get access to capital, world-class mentorship, and a global network of partners. We're looking for the boldest ideas.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/pitch" className="px-12 py-6 rounded-full bg-brand text-white font-bold text-lg hover:scale-110 transition-all shadow-[0_0_60px_rgba(249,115,22,0.4)]">
              Apply for Funding
            </Link>
            <Link to="/about" className="px-12 py-6 rounded-full border border-border bg-white text-ink font-bold text-lg hover:bg-secondary transition-all">
              Schedule a Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
