import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { LogOut, User, Briefcase, Mail, Activity, Calendar } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background text-foreground px-6 py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Column - User Info */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="rounded-[2rem] bg-white border border-border p-8 shadow-sm">
              <div className="h-24 w-24 rounded-full bg-brand/10 text-brand grid place-items-center mx-auto mb-6">
                <User size={40} />
              </div>
              <h1 className="text-2xl font-display text-ink text-center font-medium">{user.name}</h1>
              <p className="text-center text-brand font-medium text-sm mt-1">{user.role}</p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Mail size={16} className="text-brand/70" />
                  <span>{user.email}</span>
                </div>
                {user.company && (
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Briefcase size={16} className="text-brand/70" />
                    <span>{user.company}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className="w-full mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 px-5 py-3 text-sm font-medium transition-colors"
              >
                <LogOut size={16} /> Sign out
              </button>
            </div>
          </div>

          {/* Right Column - Dashboard */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-xl font-display text-ink mb-4 font-medium">Your Dashboard</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand/10 text-brand grid place-items-center">
                    <Activity size={20} />
                  </div>
                  <h3 className="text-ink font-medium">Pitches Submitted</h3>
                </div>
                <p className="text-4xl font-display text-ink">0</p>
                <p className="text-xs text-muted-foreground mt-2">You haven't submitted any pitches yet.</p>
              </div>

              <div className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand/10 text-brand grid place-items-center">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-ink font-medium">Events Reserved</h3>
                </div>
                <p className="text-4xl font-display text-ink">0</p>
                <p className="text-xs text-muted-foreground mt-2">No upcoming events reserved.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-border p-8 shadow-sm mt-6">
              <h3 className="text-ink font-medium mb-2">Complete Your Profile</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Add more details to your profile to help us match you with the right investors and mentors.
              </p>
              <button className="rounded-xl bg-brand text-brand-foreground px-5 py-2.5 text-sm font-medium hover:brightness-105 transition-all shadow-sm">
                Edit Profile
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
