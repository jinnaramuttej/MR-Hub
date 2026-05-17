import { createFileRoute } from "@tanstack/react-router";
import { mentors } from "@/lib/site-data";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentors — MR.HUB" },
      { name: "description", content: "Operators, founders and investors who give their time to MR.HUB founders. Meet the network." },
      { property: "og:title", content: "Mentors — MR.HUB" },
      { property: "og:description", content: "Operators who built it before you." },
    ],
  }),
  component: MentorsPage,
});

function MentorsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-widest text-brand font-medium">Mentor network</p>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl tracking-tight max-w-3xl">
            Operators who built it before you.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground text-lg">
            120+ mentors across product, growth, fundraising and engineering.
            Founders in our programs get unlimited 1:1 access.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mentors.map((m) => (
            <article key={m.id} className="group rounded-lg border border-border bg-card p-6 hover:border-foreground/30 transition-colors">
              <div className="flex items-center gap-4">
                <span
                  className="h-14 w-14 rounded-full grid place-items-center font-display text-lg text-background"
                  style={{ background: m.tone }}
                >
                  {m.initials}
                </span>
                <div>
                  <h3 className="font-display text-lg leading-tight">{m.name}</h3>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-foreground/80 leading-relaxed">{m.bio}</p>
              <p className="mt-4 text-xs text-muted-foreground border-t border-border pt-4">
                <span className="text-foreground font-medium">Helps with:</span> {m.expertise}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}