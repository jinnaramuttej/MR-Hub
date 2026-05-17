import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ideas } from "@/lib/site-data";
import { ArrowLeft, MapPin, Target, Lightbulb, TrendingUp, Banknote } from "lucide-react";

export const Route = createFileRoute("/ideas/$id")({
  loader: ({ params }) => {
    const idea = ideas.find((i) => i.id === params.id);
    if (!idea) throw notFound();
    return idea;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Raising on MR.HUB` },
          { name: "description", content: loaderData.pitch },
          { property: "og:title", content: `${loaderData.name} — ${loaderData.pitch}` },
          { property: "og:description", content: loaderData.problem ?? loaderData.pitch },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Idea not found.</h1>
      <Link to="/explore" className="mt-6 inline-flex items-center gap-2 text-brand">Browse all ideas</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p>{error.message}</p>
      <button className="mt-4 text-brand" onClick={reset}>Retry</button>
    </div>
  ),
  component: IdeaPage,
});

function IdeaPage() {
  const idea = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 lg:py-20">
          <Link to="/explore" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft size={12} /> Back to all startups
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded bg-secondary px-2 py-1">{idea.category}</span>
            {idea.stage && <span className="text-muted-foreground">{idea.stage}</span>}
            {idea.location && (
              <span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin size={11} />{idea.location}</span>
            )}
          </div>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl tracking-tight">{idea.name}</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl">{idea.pitch}</p>
          <p className="mt-6 text-sm text-muted-foreground">By <span className="text-foreground font-medium">{idea.founder}</span></p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {([
              { icon: Target, label: "The Problem", body: idea.problem },
              { icon: Lightbulb, label: "The Solution", body: idea.solution },
              { icon: TrendingUp, label: "Traction", body: idea.traction },
              { icon: Banknote, label: "The Ask", body: idea.ask },
            ] as const).map((s) => s.body && (
              <div key={s.label}>
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand font-medium">
                  <s.icon size={13} /> {s.label}
                </p>
                <p className="mt-3 text-lg text-foreground/85 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 self-start rounded-lg border border-border bg-card p-6 h-fit">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Round status</p>
            <p className="mt-3 font-display text-3xl">{idea.funding}</p>
            <p className="text-xs text-muted-foreground">target raise</p>
            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-brand" style={{ width: `${idea.raised}%` }} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{idea.raised}% committed</p>

            <button className="mt-6 w-full rounded-md bg-brand text-brand-foreground py-3 text-sm hover:opacity-90">
              Express interest
            </button>
            <button className="mt-2 w-full rounded-md border border-border py-3 text-sm hover:bg-secondary">
              Request data room
            </button>
            <p className="mt-4 text-[11px] text-muted-foreground text-center">
              Available to verified investors only.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}