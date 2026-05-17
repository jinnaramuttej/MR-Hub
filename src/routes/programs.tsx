import { createFileRoute, Link } from "@tanstack/react-router";
import { programs } from "@/lib/site-data";
import { ArrowRight, CheckCircle2, Calendar, MapPin, Clock } from "lucide-react";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Cohorts — MR.HUB" },
      { name: "description", content: "Launchpad, Scale and DeepTech Residency — MR.HUB programs that take founders from first prototype to funded company." },
      { property: "og:title", content: "Programs & Cohorts — MR.HUB" },
      { property: "og:description", content: "Three programs, one goal: build companies that ship." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-widest text-brand font-medium">Programs</p>
            <h1 className="mt-3 font-display text-5xl lg:text-6xl tracking-tight">
              Three programs.<br />One outcome: a real company.
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
              Whether you're sketching on a napkin or scaling Series A — there's
              a cohort designed for where you are.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={campusImg}
              alt="MR.HUB campus interior"
              loading="lazy"
              width={1280}
              height={900}
              className="w-full h-auto rounded-lg border border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-6">
          {programs.map((p, i) => (
            <article
              key={p.id}
              className="grid lg:grid-cols-12 gap-8 rounded-lg border border-border bg-card p-8 lg:p-10"
            >
              <div className="lg:col-span-4">
                <p className="text-xs text-muted-foreground">0{i + 1} / Program</p>
                <h2 className="mt-2 font-display text-3xl lg:text-4xl">{p.name}</h2>
                <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <p className="inline-flex items-center gap-2"><Clock size={14} /> {p.duration}</p>
                  <p className="inline-flex items-center gap-2"><MapPin size={14} /> {p.format}</p>
                  <p className="inline-flex items-center gap-2"><Calendar size={14} /> {p.next}</p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-foreground/80 leading-relaxed">{p.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={15} className="mt-0.5 text-brand shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 flex lg:items-end lg:justify-end">
                <Link
                  to="/pitch"
                  className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-3 text-sm hover:opacity-90"
                >
                  Apply now <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}