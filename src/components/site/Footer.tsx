import { Link } from "@tanstack/react-router";
import { MacDock } from "@/components/ui/mac-dock";
import footerWave from "@/assets/WhatsApp Image 2026-05-12 at 5.23.33 PM.jpeg";
import DotGrid from "@/components/ui/DotGrid";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {

  return (
    <footer className="border-t border-border bg-background relative overflow-hidden group">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <DotGrid
          dotSize={3}
          gap={30}
          baseColor="rgba(249, 115, 22, 0.1)"
          activeColor="#f97316"
          proximity={150}
          shockRadius={300}
          shockStrength={6}
          returnDuration={2}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-no-repeat bg-bottom bg-cover opacity-100 mix-blend-overlay"
        style={{ backgroundImage: `url(${footerWave})` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/30" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-ink grid place-items-center text-background font-display text-sm">
              M
            </span>
            <span className="font-display text-lg font-semibold">
              MR<span className="text-brand">.</span>HUB
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            India's innovation hub. Programs, mentors, capital and a campus to turn ideas into funded companies.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <MacDock />
            <Link 
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest hover:bg-brand/20 transition-all shadow-sm"
            >
              <MessageSquare size={16} /> Contact Us
            </Link>
          </div>
        </div>

        {[
          { title: "Platform", items: [["Startups", "/explore"], ["Pitch", "/pitch"], ["Investors", "/investors"], ["Mentors", "/mentors"]] },
          { title: "Ecosystem", items: [["Programs", "/programs"], ["Events", "/events"], ["Talks", "/talks"], ["About", "/about"]] },
          { title: "Resources", items: [["Founder guide", "/about"], ["Press", "/about"], ["Careers", "/about"], ["Privacy", "/about"]] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-medium">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.items.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-foreground/80 hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MR.HUB Labs, Inc. All rights reserved.</p>
          <p>Made for founders &amp; the people who back them.</p>
        </div>
      </div>

    </footer>
  );
}