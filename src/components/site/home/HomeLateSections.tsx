import { lazy, Suspense } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { ideas, events } from "@/lib/site-data";
import { IdeaCard } from "@/components/site/IdeaCard";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const HomeBottomSections = lazy(() => import("@/components/site/home/HomeBottomSections"));

export default function HomeLateSections() {
  return (
    <>
      <NextEventHighlight />
      <LiveIdeas />
      <EventsStrip />
      <Suspense fallback={<div className="min-h-[1200px]" aria-hidden="true" />}>
        <HomeBottomSections />
      </Suspense>
    </>
  );
}

function NextEventHighlight() {
  return (
    <section className="py-24 lg:py-32 border-b border-border bg-ink text-background relative overflow-hidden">
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
