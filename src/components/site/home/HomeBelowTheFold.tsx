import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, Briefcase, Handshake, LineChart, MapPin, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import campusImg from "@/assets/campus.jpg";
import member1 from "@/assets/malla_reddy.avif";
import member2 from "@/assets/vsk_reddy.jpeg";
import member3 from "@/assets/dean_pic.jpeg";
import member4 from "@/assets/dignatory_1_pic.jpeg";
import member5 from "@/assets/dig_2_pic.jpeg";
import { ideas, programs, events, mentors, partners, news, testimonials } from "@/lib/site-data";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { IdeaCard } from "@/components/site/IdeaCard";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import GhostCursor from "@/components/ui/GhostCursor";

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

const marqueeLogos = [
  { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=320&q=80", alt: "1" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=320&q=80", alt: "2" },
  { src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=320&q=80", alt: "3" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=320&q=80", alt: "4" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80", alt: "5" },
];

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
      <NextEventHighlight />
      <LiveIdeas />
      <EventsStrip />
      <MentorsPreview />
      <Investors />
      <Press />
      <FinalCTA />
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

function NextEventHighlight() {
  return (
    <section className="py-24 lg:py-32 border-b border-border bg-ink text-background relative overflow-hidden">
      <GhostCursor color="#f97316" trailLength={40} inertia={0.5} bloomStrength={0.2} />
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-4 py-1.5 text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-8">
              Highlight of the Month
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-white leading-[0.9]">
              India's Startup <br /> Mega Expo <span className="text-brand">2026.</span>
            </h2>
            <p className="mt-10 text-xl text-white/60 leading-relaxed max-w-xl">
              The premier innovation platform. Witness the official launch of MR.HUB, with the IT Minister's keynote and 100+ startups pitching under one roof.
            </p>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-brand">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Date</p>
                  <p className="text-lg font-bold">13 June 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-brand">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Venue</p>
                  <p className="text-lg font-bold">Hyderabad Campus</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link to="/events" className="px-10 py-5 rounded-full bg-brand text-white font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                Register Now
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-10 rounded-full bg-brand/20 blur-[100px] opacity-50" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-2xl">
              <h3 className="font-display text-3xl text-white mb-10">Agenda Spotlight</h3>
              <div className="space-y-10">
                {[
                  { time: "12:35 PM", title: "Chief Guest Keynote", speaker: "Shri. D. Sridhar Babu" },
                  { time: "01:35 PM", title: "Official Launch", speaker: "MR.HUB Platform Reveal" },
                  { time: "01:55 PM", title: "Main Pitch Event", speaker: "Top 20 Cohort Teams" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 group">
                    <span className="text-brand font-black text-sm w-20 shrink-0">{item.time}</span>
                    <div className="border-l border-white/10 pl-8 pb-2">
                      <h4 className="text-white font-bold text-lg group-hover:text-brand transition-colors">{item.title}</h4>
                      <p className="text-white/40 text-sm mt-1">{item.speaker}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LiveIdeas() {
  return (
    <section className="py-24 lg:py-32 border-b border-border bg-ink/[0.02]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">Active Pipeline</p>
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-ink leading-[0.9]">
              Raising on <br /> MR.HUB Now<span className="text-brand">.</span>
            </h2>
          </div>
          <Link to="/explore" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-ink hover:text-brand transition-colors">
            All Live Deals
            <div className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-brand transition-colors">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.slice(0, 6).map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsStrip() {
  const upcoming = events.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">Live Activity</p>
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-ink">
            Events Worth <br /> Showing Up To.
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
            Pitch nights, demo days, AMAs and founder dinners — every week, online and IRL.
          </p>
          <Link to="/events" className="mt-10 inline-flex items-center gap-4 group">
            <span className="text-sm font-black uppercase tracking-widest text-ink group-hover:text-brand transition-colors">See full calendar</span>
            <div className="h-12 w-12 rounded-full bg-ink text-white flex items-center justify-center transition-all group-hover:bg-brand group-hover:scale-110">
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
        <div className="lg:col-span-7">
          <div className="space-y-4">
            {upcoming.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-8 rounded-3xl border border-border bg-card hover:border-brand/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center justify-center h-16 w-16 rounded-2xl bg-secondary text-brand border border-brand/10 group-hover:bg-brand group-hover:text-white transition-colors">
                    <span className="text-[10px] font-black uppercase">{event.date.split(" ")[0]}</span>
                    <span className="text-xl font-black leading-none">{event.date.split(" ")[1]?.replace(",", "") || ""}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand mb-1 block">{event.format}</span>
                    <h4 className="font-display text-xl text-ink">{event.title}</h4>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-muted-foreground text-sm font-medium">
                  <MapPin size={14} /> {event.city}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
