import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ideas } from "@/lib/site-data";
import { IdeaCard } from "@/components/site/IdeaCard";
import { Search, Filter, Layers, Activity, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Startup Directory — MR.HUB" },
      { name: "description", content: "Search and filter through the portfolio of startups built at MR.HUB." },
    ],
  }),
  component: ExplorePage,
});

const categories = ["All", "AI", "Fintech", "ClimateTech", "HealthTech", "AgriTech", "Food"];
const stages = ["All", "Idea", "Pre-seed", "Seed", "Series A"];
const batches = ["All", "S26", "W25"];

function ExplorePage() {
  const [cat, setCat] = useState("All");
  const [stage, setStage] = useState("All");
  const [batch, setBatch] = useState("All");
  const [q, setQ] = useState("");

  const featured = useMemo(() => ideas.find(i => i.isFeatured), []);

  const filtered = useMemo(() => {
    return ideas.filter((i) =>
      (cat === "All" || i.category === cat) &&
      (stage === "All" || i.stage === stage) &&
      (batch === "All" || i.batch === batch) &&
      (q === "" || (i.name + (i.pitch || "") + (i.founder || "")).toLowerCase().includes(q.toLowerCase()))
    );
  }, [cat, stage, batch, q]);

  return (
    <div className="bg-background min-h-screen">
      {/* Directory Header */}
      <section className="bg-secondary/40 border-b border-border py-16 lg:py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-4">Directory</p>
              <h1 className="font-display text-4xl lg:text-6xl tracking-tight text-ink">
                MR.HUB Portfolio Startups
              </h1>
              <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
                Search our actively raising startups. Filter by sector, stage, and cohort to find the next generation of breakout founders.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link 
                  to="/investors"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-sm font-bold text-ink hover:bg-secondary transition-all"
                >
                  Investor Portal <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            
            {featured && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-5"
              >
                <div className="relative group cursor-pointer rounded-2xl border border-brand/20 bg-white p-6 shadow-xl hover:border-brand/40 transition-all">
                  <div className="absolute -top-3 -right-3 rounded-full bg-brand px-3 py-1 text-[10px] font-bold text-white uppercase tracking-tighter shadow-lg flex items-center gap-1">
                    <Star size={10} fill="white" /> Featured Spotlight
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-brand/10 text-brand grid place-items-center font-bold text-xl">
                      {featured.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-ink">{featured.name}</h3>
                      <p className="text-xs text-brand font-medium">Batch {featured.batch} • {featured.category}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                    {featured.pitch}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Raising Seed</span>
                    </div>
                    <button className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:gap-2 transition-all">
                      View full deck <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Command Center / Filters */}
      <section className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-border py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by startup, sector, or founder..."
              className="w-full rounded-xl border border-input bg-white pl-11 pr-4 py-3 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all shadow-sm"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col xl:flex-row gap-4 w-full xl:w-auto">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-muted-foreground" />
              <div className="flex bg-secondary p-1 rounded-lg overflow-x-auto no-scrollbar">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`whitespace-nowrap px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      cat === c
                        ? "bg-white text-ink shadow-sm"
                        : "text-muted-foreground hover:text-ink hover:bg-white/50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Filter */}
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-muted-foreground" />
              <div className="flex bg-secondary p-1 rounded-lg overflow-x-auto no-scrollbar">
                {stages.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStage(s)}
                    className={`whitespace-nowrap px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      stage === s
                        ? "bg-white text-ink shadow-sm"
                        : "text-muted-foreground hover:text-ink hover:bg-white/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Batch Filter */}
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-muted-foreground" />
              <div className="flex bg-secondary p-1 rounded-lg overflow-x-auto no-scrollbar">
                {batches.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBatch(b)}
                    className={`whitespace-nowrap px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      batch === b
                        ? "bg-white text-ink shadow-sm"
                        : "text-muted-foreground hover:text-ink hover:bg-white/50"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing {filtered.length} startups</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((i) => (
              <IdeaCard key={i.name} idea={i} />
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="mt-16 py-20 text-center border border-dashed border-border rounded-2xl bg-secondary/30">
              <p className="text-muted-foreground">No startups found matching your criteria.</p>
              <button 
                onClick={() => { setCat("All"); setStage("All"); setQ(""); }}
                className="mt-4 text-brand text-sm font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
