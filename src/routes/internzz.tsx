import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Briefcase,
  Compass,
  Sparkles,
  Search,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/hero-founders.jpg";
import previewImage from "@/assets/event-pitch.jpg";
import cardsImage from "@/assets/campus.jpg";

export const Route = createFileRoute("/internzz")({
  head: () => ({
    meta: [
      { title: "Internzz — MR.HUB" },
      { name: "description", content: "Find internships that actually build your future." },
    ],
  }),
  component: InternzzPage,
});

function InternzzPage() {
  return (
    <>
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Internzz</p>
              <h1 className="mt-3 font-display text-5xl lg:text-6xl tracking-tight">
                Find Internships That Actually Build Your Future
              </h1>
              <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
                Work with real startups, gain hands-on experience, and grow beyond classrooms.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm shadow-soft transition"
                >
                  Explore Internships <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/startups"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm text-foreground transition hover:bg-secondary"
                >
                  Post Opportunity
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img src={heroImage} alt="Internzz community" className="h-56 w-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <img src={previewImage} alt="Internzz previews" className="h-40 w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <img src={cardsImage} alt="Internzz listings" className="h-40 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { k: "500+", l: "Internships" },
              { k: "120+", l: "Startups" },
              { k: "5,000+", l: "Students" },
            ].map((stat) => (
              <div key={stat.l} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="font-display text-3xl">{stat.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand font-medium">Featured</p>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
                Featured internships
              </h2>
            </div>
            <Link to="/explore" className="text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                role: "Frontend Intern",
                company: "Early-stage startup",
                type: "Remote",
                stipend: "₹5k–₹15k",
              },
              {
                role: "Product Design Intern",
                company: "Early-stage startup",
                type: "Hybrid",
                stipend: "₹8k–₹18k",
              },
              {
                role: "Growth Marketing Intern",
                company: "Early-stage startup",
                type: "Remote",
                stipend: "₹6k–₹12k",
              },
            ].map((role) => (
              <Link
                key={role.role}
                to="/explore"
                className="group rounded-2xl border border-border p-6 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elev"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Role</p>
                    <h3 className="mt-2 font-display text-2xl">{role.role}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{role.company}</p>
                  </div>
                  <span className="h-10 w-10 rounded-full border border-border grid place-items-center text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Briefcase size={16} />
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-1">
                    {role.type}
                  </span>
                  <span>Stipend: {role.stipend}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-brand">
                  Apply Now <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-4xl tracking-tight">Categories</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Tech", "Marketing", "Design", "Business", "AI / ML"].map((label) => (
              <button
                key={label}
                type="button"
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-elev"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-4xl tracking-tight">How Internzz works</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "Browse Opportunities",
                body: "Explore internships from real startups.",
              },
              {
                icon: MessageCircle,
                title: "Apply & Connect",
                body: "Directly connect with founders.",
              },
              {
                icon: TrendingUp,
                title: "Work & Grow",
                body: "Gain real-world startup experience.",
              },
            ].map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <step.icon size={18} className="text-brand" />
                  <span className="text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-4xl tracking-tight">Why Internzz</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              "Work directly with founders",
              "Real startup exposure (not dummy tasks)",
              "Build portfolio, not just resume",
              "Community-driven opportunities",
            ].map((point) => (
              <div key={point} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 shadow-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">For Startups</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">
                Hiring interns? Find the right talent here.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl">
                Build a high-signal pipeline and connect with students who care about real work.
              </p>
            </div>
            <Link
              to="/startups"
              className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm shadow-soft"
            >
              Post Internship <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-2xl border border-border bg-card p-10 lg:p-12 shadow-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl tracking-tight">
                Start your journey with real startups today.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl">
                Build proof of work, get mentorship, and unlock real-world experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm shadow-soft"
              >
                Explore Internships <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/startups"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm text-foreground transition hover:bg-secondary"
              >
                Join as Startup
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
