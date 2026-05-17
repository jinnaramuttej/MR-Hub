import { lazy, Suspense } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Briefcase, Handshake, LineChart, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import member1 from "@/assets/malla_reddy.avif";
import member2 from "@/assets/vsk_reddy.jpeg";
import member3 from "@/assets/dean_pic.jpeg";
import member4 from "@/assets/dignatory_1_pic.jpeg";
import member5 from "@/assets/dig_2_pic.jpeg";
import { partners, programs, testimonials } from "@/lib/site-data";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const HomeLateSections = lazy(() => import("@/components/site/home/HomeLateSections"));

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const marqueeLogos = [
  { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=320&q=80", alt: "1" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=320&q=80", alt: "2" },
  { src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=320&q=80", alt: "3" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=320&q=80", alt: "4" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80", alt: "5" },
];

const boardMembersData = [
  { name: "Dr. Dhanunjaya Chary", title: "Dean", image: member3 },
  { name: "Dr. VSK Reddy", title: "Vice Chancellor", image: member2 },
  { name: "Dr. Malla Reddy", title: "Founder & Chairman", image: member1 },
  { name: "Dignatory 1", title: "MR.HUB Board", image: member4 },
  { name: "Dignatory 2", title: "MR.HUB Board", image: member5 },
];

const ecosystemActions = [
  {
    title: "FOUNDERS FIRST",
    description: "The ultimate launchpad for student entrepreneurs. Get the tools, the network, and the capital to ship your first product.",
    cta: "Launch your Startup",
    to: "/startups",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    icon: Rocket,
  },
  {
    title: "INTERNZ",
    description: "Skip the corporate ladder. Join high-growth university startups as an early hire and build something that matters.",
    cta: "Grab an Internship",
    to: "/internzz",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    icon: Briefcase,
  },
  {
    title: "INVEST",
    description: "Back the next generation of breakout founders. Access a curated pipeline of vetted student ventures ready for scale.",
    cta: "Deploy Capital",
    to: "/investors",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    icon: LineChart,
  },
] as const;

export default function HomeBelowTheFold() {
  return (
    <>
      <LogoMarquee />
      <Partners />
      <Stats />
      <EcosystemActionsSection />
      <BoardMembers />
      <WallOfLove />
      <ProgramsPreview />
      <Suspense fallback={<div className="min-h-[1600px]" aria-hidden="true" />}>
        <HomeLateSections />
      </Suspense>
    </>
  );
}

function LogoMarquee() {
  return (
    <section className="relative py-16 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="shrink-0 text-center lg:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-2">Network Strength</p>
            <h3 className="font-display text-2xl text-ink">Trusted by the Leaders.</h3>
          </div>
          <div className="w-full">
            <LogoCloud logos={marqueeLogos} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="py-8 border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          {partners.map((name) => (
            <span key={name} className="font-display text-xs font-bold uppercase tracking-widest text-ink">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-20 lg:py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          ["240+", "Startups Funded", Rocket],
          ["$84M", "Capital Facilitated", LineChart],
          ["310", "Active Investors", Handshake],
          ["120+", "Elite Mentors", Sparkles],
        ].map(([value, label, Icon], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group p-6 rounded-3xl bg-card border border-border transition-all hover:border-brand/40"
          >
            <div className="h-10 w-10 rounded-xl bg-brand/5 border border-brand/10 text-brand grid place-items-center mb-4 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500">
              <Icon size={18} />
            </div>
            <p className="font-display text-4xl text-ink tracking-tighter">{value}</p>
            <p className="mt-2 text-sm font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function EcosystemActionsSection() {
  return (
    <section className="py-20 lg:py-32 border-b border-border bg-ink/[0.02]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeInUp} className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-black mb-4">MR.HUB Ecosystem</p>
          <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-ink leading-[0.9]">
            What You Can Do <br /> on MR.HUB<span className="text-brand">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {ecosystemActions.map((card) => (
            <motion.div key={card.title} variants={fadeInUp}>
              <Link
                to={card.to}
                className="group relative block overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-500 hover:shadow-2xl hover:border-brand/40"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute -bottom-6 left-8 grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background shadow-xl text-brand z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:rotate-[360deg]">
                    <card.icon size={20} />
                  </div>
                </div>
                <div className="px-8 pb-10 pt-12">
                  <h3 className="font-display text-2xl tracking-tight text-ink group-hover:text-brand transition-colors">{card.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{card.description}</p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2 text-xs font-bold text-ink transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:border-brand">
                      {card.cta}
                    </span>
                    <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowUpRight size={18} className="text-brand" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BoardMembers() {
  return (
    <section className="py-24 lg:py-32 border-b border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">Leadership</p>
          <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-ink">
            The Board of MR.HUB<span className="text-brand">.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 items-end">
          {boardMembersData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative overflow-hidden transition-all duration-500 ${
                index === 2 ? "rounded-[2.5rem] bg-ink h-[450px] shadow-2xl scale-105 z-10 border-4 border-brand/20" : "rounded-3xl bg-card border border-border h-[380px] hover:border-brand/40"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 inset-x-0 p-8">
                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${index === 2 ? "text-brand" : "text-white/60"}`}>
                  {member.title}
                </p>
                <p className="text-xl font-display text-white group-hover:text-brand transition-colors">{member.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WallOfLove() {
  return (
    <section className="py-24 lg:py-32 border-b border-border bg-ink relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">Founder Feedback</p>
          <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-white">
            Wall of Love<span className="text-brand">.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all hover:border-brand/40 group hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-8 text-brand">
                {[1, 2, 3, 4, 5].map((sparkle) => (
                  <Sparkles key={sparkle} size={14} className="fill-brand" />
                ))}
              </div>
              <p className="text-xl text-white font-medium leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="mt-10 flex items-center gap-5">
                <div className="h-12 w-12 rounded-2xl bg-brand text-white grid place-items-center font-black text-sm shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-brand transition-colors">{testimonial.name}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsPreview() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">Cohort Selection</p>
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-ink leading-[0.9]">
              Built for Every Stage <br /> of the Journey<span className="text-brand">.</span>
            </h2>
          </div>
          <Link to="/programs" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-ink hover:text-brand transition-colors">
            Full Curriculum
            <div className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-brand transition-colors">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div key={program.id} whileHover={{ y: -10 }} transition={{ duration: 0.4 }}>
              <Link
                to="/programs"
                className="group block relative rounded-[2rem] border border-border bg-card p-10 h-full hover:border-brand/40 hover:shadow-2xl transition-all"
              >
                <span className="text-4xl font-display text-brand/20 group-hover:text-brand transition-colors">0{index + 1}</span>
                <h3 className="mt-8 font-display text-2xl text-ink">{program.name}</h3>
                <p className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-tighter">
                  {program.duration} · {program.format}
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed">{program.blurb}</p>
                <div className="mt-10 flex items-center justify-between border-t border-border pt-8">
                  <span className="text-xs font-black uppercase tracking-widest text-brand group-hover:translate-x-2 transition-transform block">
                    Learn More
                  </span>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-brand transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
