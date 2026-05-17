import type { Idea } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Handshake } from "lucide-react";
import { toast } from "sonner";

export function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <Link
      to="/ideas/$id"
      params={{ id: idea.id }}
      className="group relative block rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-brand/50 hover:shadow-elev hover:-translate-y-1 reveal"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[10px] font-semibold tracking-wider uppercase">
            <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-2.5 py-1">
              Batch {idea.batch || "S26"}
            </span>
            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
              {idea.category}
            </span>
            {idea.stage && (
              <span className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                {idea.stage}
              </span>
            )}
          </div>
          <h3 className="mt-3 text-xl font-display font-semibold text-foreground">{idea.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{idea.pitch}</p>
        </div>
        <span className="h-8 w-8 shrink-0 grid place-items-center rounded-md border border-border text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
          <ArrowUpRight size={14} />
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="text-foreground font-medium">Raising {idea.funding}</span>
          <span>{idea.raised}% committed</span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-brand transition-all duration-700"
            style={{ width: `${idea.raised}%` }}
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>By {idea.founder}</span>
          {idea.location && (
            <span className="inline-flex items-center gap-1"><MapPin size={11} />{idea.location}</span>
          )}
        </div>
        
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toast.success("Introduction Request Sent", {
              description: `We've notified ${idea.founder} that you're interested in ${idea.name}.`,
            });
          }}
          className="mt-5 w-full flex items-center justify-center gap-2 rounded-lg bg-foreground text-background py-2 text-xs font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-black/10"
        >
          <Handshake size={14} /> Request Introduction
        </button>
      </div>
    </Link>
  );
}