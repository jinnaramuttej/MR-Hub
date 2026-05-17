import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/mrhub-logo.png";

const links = [
  { to: "/explore", label: "Startups" },
  { to: "/programs", label: "Programs" },
  { to: "/events", label: "Events" },
  { to: "/mentors", label: "Mentors" },
  { to: "/talks", label: "STARTUP STORY@MRHUB" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { isAuthenticated, user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="MR.HUB" className="h-18 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: false }}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-brand/20 text-brand grid place-items-center text-xs font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
          )}
          <Link
            to="/pitch"
            className="inline-flex items-center rounded-md bg-brand text-brand-foreground text-sm font-bold px-6 py-2.5 transition-all duration-300 hover:brightness-110 hover:shadow-lg active:scale-95"
          >
            Pitch Idea
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 grid place-items-center rounded-md hover:bg-muted"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-medium text-foreground border-b border-border/50"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium"
                  >
                    <div className="h-10 w-10 rounded-full bg-brand/20 text-brand grid place-items-center font-bold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    My Profile
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="py-3 text-lg font-medium"
                  >
                    Sign in
                  </Link>
                )}
                <Link
                  to="/pitch"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center items-center rounded-md bg-brand text-brand-foreground text-lg font-bold py-4"
                >
                  Pitch your idea
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
