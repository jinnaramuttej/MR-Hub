import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BarChart3, Briefcase, ShieldCheck, TrendingUp, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — MR.HUB" },
      { name: "description", content: "Invest in the next big ideas with curated startup access and structured data rooms." },
    ],
  }),
  component: InvestorsPage,
});

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

function InvestorsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border bg-ink">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black text-brand uppercase tracking-[0.3em] mb-8">
              Smart Capital Hub
            </span>
            <h1 className="font-display text-5xl lg:text-[100px] leading-[0.85] tracking-tighter text-white font-bold">
              Access the Hub's <br /> Alpha <span className="text-brand">Pipeline.</span>
            </h1>
            <p className="mt-10 text-xl lg:text-2xl text-white/60 max-w-2xl leading-relaxed">
              Curated deal flow, structured data rooms, and direct lines to the most promising student founders in the country. 
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/explore"
                className="px-10 py-5 rounded-full bg-brand text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(249,115,22,0.4)]"
              >
                Explore Opportunities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Startups Grid */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeInUp} className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
            <div className="max-w-2xl">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">Investment Spotlight</p>
                <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-ink">
                    Featured Opportunities<span className="text-brand">.</span>
                </h2>
            </div>
            <Link to="/explore" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-ink hover:text-brand transition-colors">
                View All Startups <div className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-brand transition-colors"><ArrowUpRight size={16} /></div>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clearpath Health", blurb: "AI-powered patient routing for tier-2 hospitals.", stage: "Seed", raised: "$420K" },
              { title: "Gridwise Solar", blurb: "Distributed energy storage for industrial parks.", stage: "Pre-seed", raised: "$180K" },
              { title: "Farmloop", blurb: "Procurement + logistics platform for agri supply chains.", stage: "Seed", raised: "$550K" },
            ].map((card, i) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[2.5rem] border border-border bg-card p-10 hover:border-brand/40 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-black uppercase tracking-widest">
                    {card.stage}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-ink text-[10px] font-black uppercase tracking-widest">
                    India
                  </span>
                </div>
                <h3 className="font-display text-3xl text-ink mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {card.blurb}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-border">
                    <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Target Raise</p>
                        <p className="text-lg font-bold text-ink">{card.raised}</p>
                    </div>
                    <Link to="/explore" className="h-12 w-12 rounded-full bg-ink text-white grid place-items-center transition-all group-hover:bg-brand group-hover:scale-110">
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-ink text-white overflow-hidden relative">
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4">Core Infrastructure</p>
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight leading-[0.9]">
                Structured for Institutional <br /> Performance<span className="text-brand">.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Precision Discovery", body: "Filter by sector, ticket size, traction, and founder readiness in minutes with our proprietary scoring." },
              { icon: Briefcase, title: "Transparency First", body: "Access monthly metrics, burn rates, and real-time pipeline updates from every startup in your portfolio." },
              { icon: ShieldCheck, title: "Institutional Diligence", body: "Pre-vetted data rooms with verified cap tables, customer evidence, and deep technical documentation." },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="h-14 w-14 rounded-2xl bg-brand text-white grid place-items-center mb-8 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                    <item.icon size={24} />
                </div>
                <h3 className="font-display text-2xl mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
                { label: "Vetted Investors", value: "310+", icon: Users },
                { label: "Markets Reached", value: "12+", icon: Globe },
                { label: "Follow-on Rate", value: "71%", icon: TrendingUp },
                { label: "Exit Pipeline", value: "14", icon: BarChart3 },
            ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                    <p className="text-4xl font-display text-ink mb-2">{stat.value}</p>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-48 bg-ink relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand/20 blur-[150px] -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-5xl lg:text-[120px] leading-[0.8] tracking-tighter text-white mb-12">
              Back the <br /> Next Founders<span className="text-brand">.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/50 mb-16 leading-relaxed">
              Join the MR.HUB investor network today and get early visibility into the startups that will define the next decade of Indian innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/explore"
                className="px-12 py-6 rounded-full bg-brand text-white font-bold text-lg hover:scale-110 transition-all shadow-[0_0_60px_rgba(249,115,22,0.4)]"
              >
                Apply for Network Access
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
