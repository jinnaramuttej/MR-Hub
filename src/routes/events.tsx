import { createFileRoute } from "@tanstack/react-router";
import { events } from "@/lib/site-data";
import { Calendar, MapPin, Users } from "lucide-react";
import eventImg from "@/assets/startup_expo.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — MR.HUB" },
      { name: "description", content: "Pitch nights, demo days, AMAs and founder dinners — the live ecosystem of MR.HUB." },
      { property: "og:title", content: "Events — MR.HUB" },
      { property: "og:description", content: "Where founders, mentors and investors actually meet." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const featured = events[1];
  const rest = events.filter((e) => e.id !== featured.id);
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-widest text-brand font-medium">Events</p>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl tracking-tight max-w-3xl">
            Where founders, mentors and capital meet — in person.
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 rounded-lg overflow-hidden border border-border bg-card">
            <div className="lg:col-span-7">
              <img src={eventImg} alt="Demo day pitch" loading="lazy" width={1280} height={900} className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block w-fit text-xs px-2 py-1 rounded bg-brand/10 text-brand font-medium">Featured</span>
              <h2 className="mt-4 font-display text-3xl lg:text-4xl">{featured.title}</h2>
              <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                <p className="inline-flex items-center gap-2"><Calendar size={14} /> {featured.date}</p>
                <p className="inline-flex items-center gap-2"><MapPin size={14} /> {featured.city}</p>
                <p className="inline-flex items-center gap-2"><Users size={14} /> {featured.audience}</p>
              </div>
              <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm hover:opacity-90">
                Reserve a seat
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-2xl text-muted-foreground">Upcoming</h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {rest.map((e) => (
              <li key={e.id} className="grid grid-cols-12 items-center gap-4 py-5 hover:bg-secondary/50 px-2 transition-colors">
                <div className="col-span-12 sm:col-span-3 text-sm text-muted-foreground">{e.date}</div>
                <div className="col-span-12 sm:col-span-5 font-display text-lg">{e.title}</div>
                <div className="col-span-6 sm:col-span-2 text-xs text-muted-foreground">{e.city}</div>
                <div className="col-span-6 sm:col-span-2 text-right">
                  <span className="text-xs px-2 py-1 rounded bg-secondary">{e.format}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}