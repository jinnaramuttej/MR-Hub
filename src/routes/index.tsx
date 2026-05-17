import { lazy, Suspense } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import heroVideo from "@/assets/hero-bg.mp4";
import heroPoster from "@/assets/hero-founders.jpg";

const HomeBelowTheFold = lazy(() => import("@/components/site/home/HomeBelowTheFold"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MR.HUB — Malla Reddy University Innovation Hub" },
      {
        name: "description",
        content:
          "The official innovation hub of Malla Reddy University. Programs, mentors, and capital to turn student ideas into funded companies.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
        <HomeBelowTheFold />
      </Suspense>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-border bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50 scale-105"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black text-brand uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
            Malla Reddy University Innovation Hub
          </span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-[110px] leading-[0.85] tracking-tighter text-white font-bold">
            We Back The Best <br /> Student <span className="text-brand">Founders.</span>
          </h1>
          <p className="mt-10 text-xl lg:text-3xl font-medium text-white/70 max-w-2xl leading-tight">
            $2M+ deployed to the next generation of engineers, builders, and operators.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              to="/pitch"
              className="inline-flex items-center gap-3 rounded-full bg-brand text-white px-10 py-5 font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] active:scale-95"
            >
              Get Funded <ArrowRight size={20} />
            </Link>
            <Link
              to="/explore"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              Explore Startups
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex items-center gap-8"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="h-12 w-12 rounded-full border-4 border-ink bg-secondary overflow-hidden">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 10}`}
                    alt="Founder"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
              <div className="h-12 w-12 rounded-full border-4 border-ink bg-brand grid place-items-center text-[10px] font-black text-white">
                240+
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-brand font-black text-sm uppercase tracking-widest">Growth</p>
              <p className="text-white/60 text-xs">Avg. 19 days to close Seed round</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}