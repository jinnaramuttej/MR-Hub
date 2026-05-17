import { createFileRoute } from "@tanstack/react-router";
import { podcasts } from "@/lib/site-data";
import { Play, Headset, Mic2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/talks")({
  head: () => ({
    meta: [
      { title: "MR.HUB Talks — Podcast" },
      { name: "description", content: "The voice of the ecosystem. Deep-dives with founders, investors, and operators." },
    ],
  }),
  component: TalksPage,
});

function TalksPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-6"
            >
              <Mic2 size={12} /> The Voice of MR.HUB
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl lg:text-7xl tracking-tight text-ink"
            >
              MR.HUB Talks<span className="text-brand">.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground leading-relaxed"
            >
              Bespoke conversations with the founders, investors, and technical architects building the next generation of global startups from India.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Highlight Section */}
      <section className="py-12 lg:py-20 relative overflow-hidden bg-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="group relative rounded-[2.5rem] border border-white/10 bg-black p-2 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://img.youtube.com/vi/7FbeLGB6lr0/maxresdefault.jpg" 
                alt="Highlight Podcast" 
                className="h-full w-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="rounded-full bg-brand px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                  Highlight Episode
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Foundational Series • ESSENTIAL</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-6"
              >
                How to Pitch to Investors<span className="text-brand">.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg mb-8 line-clamp-2 max-w-xl leading-relaxed"
              >
                Michael Seibel (Managing Director, Y Combinator) presents the definitive framework for the perfect 2-minute startup pitch.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <a 
                  href="https://www.youtube.com/watch?v=7FbeLGB6lr0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-bold transition-all hover:scale-105 hover:bg-brand hover:text-white group shadow-2xl"
                >
                  <Play size={20} fill="currentColor" className="group-hover:fill-white" /> Start Watching
                </a>
                <div className="flex -space-x-3 items-center">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-muted overflow-hidden shadow-lg">
                            <img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="Guest" />
                        </div>
                    ))}
                    <div className="h-10 w-10 rounded-full border-2 border-black bg-brand/40 backdrop-blur-md grid place-items-center text-[10px] font-black text-white shadow-lg">
                        +TRUST
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-brand mb-4">Complete Series</h3>
              <h2 className="font-display text-4xl text-ink tracking-tight mb-4">Past Conversations<span className="text-brand">.</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Browse our full library of deep-dives, technical demos, and ecosystem insights.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Live: 42 Episodes Available
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {podcasts.map((p, i) => {
              const Content = (
                <div className="group cursor-pointer">
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-border shadow-md bg-secondary">
                    <img 
                      src={p.thumbnail || `https://images.unsplash.com/photo-${1500000000000 + i*1000}?auto=format&fit=crop&w=800&q=80`} 
                      alt={p.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                      <div className="h-16 w-16 rounded-full bg-brand text-white grid place-items-center shadow-[0_0_40px_rgba(249,115,22,0.6)] scale-75 group-hover:scale-100 transition-all duration-500">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                      <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black text-white uppercase tracking-wider">{p.duration}</span>
                      <span className="bg-brand/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black text-white uppercase tracking-wider shadow-lg">Talks</span>
                    </div>
                  </div>
                  
                  <div className="px-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-8 bg-brand/30 rounded-full" />
                      <span className="text-[10px] font-black text-brand uppercase tracking-[0.2em]">{p.host}</span>
                    </div>
                    <h4 className="font-display text-2xl text-ink leading-[1.2] group-hover:text-brand transition-colors mb-3">
                      {p.title}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                      {p.topic}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                >
                  {p.videoUrl ? (
                    <a href={p.videoUrl} target="_blank" rel="noopener noreferrer">
                      {Content}
                    </a>
                  ) : Content}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
