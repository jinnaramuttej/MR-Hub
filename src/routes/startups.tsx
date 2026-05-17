import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Filter,
  Heart,
  LineChart,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import heroIllustration from "../assets/image.png";
import swooshBanner from "../assets/WhatsApp Image 2026-05-12 at 5.23.33 PM.jpeg";
import { toggleUpvote } from "@/lib/startup-actions";

export const Route = createFileRoute("/startups")({
  head: () => ({
    meta: [
      { title: "Startups — MR.HUB" },
      { name: "description", content: "Launch and showcase your startup ideas." },
    ],
  }),
  component: StartupsPage,
});

function StartupsPage() {
  const [upvoted, setUpvoted] = useState<string[]>([]);
  const [localUpvotes, setLocalUpvotes] = useState<Record<string, number>>({
    "PulseGrid": 348,
    "ClinicOS": 271,
    "FleetMint": 219,
    "CampusLoop": 188,
    "AgriLens": 164,
    "HavenDesk": 141,
  });

  useEffect(() => {
    // Read from cookies/localStorage if needed, 
    // or just let the server function handle it.
    const cookies = document.cookie.split("; ");
    const upvoteCookie = cookies.find(row => row.startsWith("upvoted_startups="));
    if (upvoteCookie) {
      setUpvoted(decodeURIComponent(upvoteCookie.split("=")[1]).split(",").filter(Boolean));
    }
  }, []);

  const handleUpvote = async (name: string) => {
    const result = await toggleUpvote({ data: name });
    if (result.success) {
      if (result.isUpvoted) {
        setUpvoted(prev => [...prev, name]);
        setLocalUpvotes(prev => ({ ...prev, [name]: prev[name] + 1 }));
      } else {
        setUpvoted(prev => prev.filter(n => n !== name));
        setLocalUpvotes(prev => ({ ...prev, [name]: prev[name] - 1 }));
      }
    }
  };

  const featuredStartups = [
    {
      name: "PulseGrid",
      pitch: "AI-powered energy optimization for multi-site retail chains.",
      category: "AI",
      stage: "MVP",
      funding: "INR 80L",
      upvotes: 348,
      supporters: 42,
    },
    {
      name: "ClinicOS",
      pitch: "A modern operating system for independent clinics and labs.",
      category: "SaaS",
      stage: "Growth",
      funding: "Open",
      upvotes: 271,
      supporters: 31,
    },
    {
      name: "FleetMint",
      pitch: "Instant trade finance for last-mile logistics operators.",
      category: "Fintech",
      stage: "Idea",
      funding: "INR 35L",
      upvotes: 219,
      supporters: 27,
    },
    {
      name: "CampusLoop",
      pitch: "Hyperlocal marketplace for university communities.",
      category: "EdTech",
      stage: "MVP",
      funding: "Open",
      upvotes: 188,
      supporters: 22,
    },
    {
      name: "AgriLens",
      pitch: "Satellite-driven crop forecasting for SME farmers.",
      category: "AI",
      stage: "Growth",
      funding: "INR 1.2Cr",
      upvotes: 164,
      supporters: 19,
    },
    {
      name: "HavenDesk",
      pitch: "Secure client onboarding for boutique law firms.",
      category: "SaaS",
      stage: "Idea",
      funding: "Open",
      upvotes: 141,
      supporters: 16,
    },
  ];

  const spotlight = [
    {
      name: "NimblePay",
      problem: "Distributed teams struggle with compliant global payouts.",
      idea: "Unified payroll and contractor payments with one dashboard.",
      impact: "Cuts payout ops time by 55% for finance teams.",
      progress: "120+ teams onboarded, INR 15Cr processed monthly.",
      category: "Fintech",
      stage: "Growth",
    },
    {
      name: "SignalDock",
      problem: "Subscription teams lack real-time churn signals.",
      idea: "Live ops dashboard for retention playbooks and alerts.",
      impact: "18% lift in renewals across 9 pilots.",
      progress: "Launching paid tier with 14 design partners.",
      category: "SaaS",
      stage: "MVP",
    },
  ];

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                MR.HUB Startups Directory
              </p>
              <h1 className="mt-3 font-display text-5xl lg:text-6xl tracking-tight">
                Turn Your Ideas Into Funded Startups
              </h1>
              <p className="mt-5 text-muted-foreground text-lg">
                Showcase your idea, get discovered, and connect with investors.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/pitch"
                  className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm shadow-soft"
                >
                  Submit Your Idea <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-foreground hover:border-foreground/40 transition-colors"
                >
                  Explore Startups <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-border bg-card shadow-soft" />
              <img
                src={heroIllustration}
                alt="Founders collaborating around a product roadmap"
                className="relative rounded-3xl border border-border shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand font-medium">Filters</p>
              <h2 className="mt-2 font-display text-3xl lg:text-4xl tracking-tight">
                Filter and discover
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "AI",
                "SaaS",
                "Fintech",
                "EdTech",
                "Idea",
                "MVP",
                "Growth",
                "Trending",
                "New",
                "Most Supported",
              ].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-colors ${
                    index === 7
                      ? "border-brand text-brand"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Filter size={14} /> {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand font-medium">Featured Startups</p>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
                Product Hunt-style discovery
              </h2>
            </div>
            <Link to="/explore" className="text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              Browse all <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredStartups.map((startup) => (
              <article
                key={startup.name}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {startup.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl">{startup.name}</h3>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {startup.stage}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {startup.pitch}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-1">
                    Funding: {startup.funding}
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <TrendingUp size={14} /> {localUpvotes[startup.name] || startup.upvotes} upvotes
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users size={14} /> {startup.supporters} supporters
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs text-foreground transition-colors hover:border-foreground/40"
                  >
                    View Details <ArrowUpRight size={14} />
                  </Link>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleUpvote(startup.name)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                        upvoted.includes(startup.name)
                          ? "border-brand bg-brand text-brand-foreground"
                          : "border-border text-foreground hover:border-foreground/40"
                      }`}
                    >
                      <ArrowUp size={14} /> {upvoted.includes(startup.name) ? "Upvoted" : "Upvote"}
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-foreground transition-colors hover:border-foreground/40"
                    >
                      <Heart size={14} /> Support
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Submit Idea",
                body: "Describe your startup concept, traction, and funding ask.",
              },
              {
                icon: Building2,
                title: "Get Visibility",
                body: "Community + investors discover you through MR.HUB.",
              },
              {
                icon: Rocket,
                title: "Raise Support",
                body: "Gain traction, funding, or connections to move faster.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <item.icon size={18} className="text-brand" />
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand font-medium">Spotlight</p>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
                Startup spotlight
              </h2>
            </div>
            <Link to="/explore" className="text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all spotlights <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {spotlight.map((item) => (
              <div key={item.name} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs text-brand">
                    {item.stage}
                  </span>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-start gap-2">
                    <BadgeCheck size={16} className="mt-0.5 text-brand" />
                    Problem: {item.problem}
                  </span>
                  <span className="inline-flex items-start gap-2">
                    <Sparkles size={16} className="mt-0.5 text-brand" />
                    Idea: {item.idea}
                  </span>
                  <span className="inline-flex items-start gap-2">
                    <LineChart size={16} className="mt-0.5 text-brand" />
                    Why it matters: {item.impact}
                  </span>
                  <span className="inline-flex items-start gap-2">
                    <Briefcase size={16} className="mt-0.5 text-brand" />
                    Progress: {item.progress}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/pitch"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-foreground/40 transition-colors"
                  >
                    Request intro <ArrowUpRight size={14} />
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-4 py-2 text-sm shadow-soft"
                  >
                    Follow updates <ArrowUp size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Open idea exposure",
                body: "Put your concept in front of operators and early investors.",
              },
              {
                title: "Early validation",
                body: "Collect upvotes, comments, and product-market feedback fast.",
              },
              {
                title: "Investor access",
                body: "Share traction, milestones, and funding needs in one place.",
              },
              {
                title: "Community feedback",
                body: "Get candid insights from founders, mentors, and builders.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 shadow-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl tracking-tight">
                Looking to invest in promising ideas?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl">
                Explore a directory of vetted startup ideas and connect with founders.
              </p>
            </div>
            <Link
              to="/investors"
              className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-3 text-sm shadow-soft"
            >
              Explore Investors Page <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 lg:p-12 shadow-soft">
            <img
              src={swooshBanner}
              alt="Decorative banner"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full object-cover opacity-60"
            />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl tracking-tight">
                  Your idea deserves to be seen. Start building today.
                </h2>
                <p className="mt-3 text-sm text-muted-foreground max-w-xl">
                  Launch your startup profile and start gathering support from the MR.HUB community.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/pitch"
                  className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm shadow-soft"
                >
                  Submit Idea <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-foreground hover:border-foreground/40 transition-colors"
                >
                  Explore Startups <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
