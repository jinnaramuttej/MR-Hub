import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth, UserRole } from "@/lib/auth";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("Founder");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    login({
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role,
      company: company || undefined,
    });
    
    navigate({ to: "/profile" });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background text-foreground px-4 py-12 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10 bg-white border border-border p-8 sm:p-10 rounded-2xl shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-medium text-ink mb-2">Create an account</h1>
          <p className="text-muted-foreground text-sm">Join the ecosystem to pitch ideas and reserve seats.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole("Founder")}
              className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-colors ${role === "Founder" ? "border-brand bg-brand/5 text-brand" : "border-input bg-background text-muted-foreground hover:bg-secondary"}`}
            >
              Founder
            </button>
            <button
              type="button"
              onClick={() => setRole("Investor")}
              className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-colors ${role === "Investor" ? "border-brand bg-brand/5 text-brand" : "border-input bg-background text-muted-foreground hover:bg-secondary"}`}
            >
              Investor
            </button>
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 block">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 block">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 block">
              {role === "Founder" ? "Startup Name (Optional)" : "Firm/Company (Optional)"}
            </label>
            <input
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder={role === "Founder" ? "Acme AI" : "Helix Capital"}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground px-5 py-3.5 text-sm font-medium shadow-sm hover:brightness-105 transition-all hover:shadow-md active:scale-[0.98]"
          >
            Create Account <ArrowRight size={16} />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="text-brand font-medium hover:underline transition-colors">Log in</Link>
        </p>
      </div>
    </div>
  );
}
