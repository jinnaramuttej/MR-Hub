import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Upload, FileText, Sparkles, Rocket, Target, LineChart, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/pitch")({
  head: () => ({
    meta: [
      { title: "Pitch Your Idea — MR.HUB" },
      { name: "description", content: "Submit your startup idea to MR.HUB and get matched with investors who back your category and stage." },
    ],
  }),
  component: PitchPage,
});

function PitchPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  
  const [formData, setFormData] = useState({
    founderName: "",
    email: "",
    startupName: "",
    oneLinePitch: "",
    category: "AI",
    stage: "Idea",
    fundingRequired: "",
    traction: ""
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    // Basic validation
    if (step === 1 && (!formData.founderName || !formData.email)) return;
    if (step === 2 && (!formData.startupName || !formData.oneLinePitch)) return;
    if (step === 4 && (!formData.fundingRequired || !formData.traction)) return;
    
    setStep(s => Math.min(s + 1, 5));
  };
  
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const totalSteps = 5;

  const steps = [
    { title: "Founder", icon: <Briefcase size={18} /> },
    { title: "Startup", icon: <Rocket size={18} /> },
    { title: "Market", icon: <Target size={18} /> },
    { title: "Traction", icon: <LineChart size={18} /> },
    { title: "Deck", icon: <Upload size={18} /> }
  ];

  return (
    <div className="bg-background min-h-screen pt-20 pb-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-6">
              Venture Application
            </span>
            <h1 className="font-display text-4xl lg:text-6xl tracking-tight text-ink">
              Pitch Your <span className="text-brand">Innovation.</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Follow our structured 5-step process to get your idea in front of our investment committee.
            </p>
          </motion.div>
        </div>

        {/* Step Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative max-w-2xl mx-auto">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 z-0" />
            
            {/* Active Line */}
            <motion.div 
              className="absolute top-1/2 left-0 h-px bg-brand -translate-y-1/2 z-1"
              initial={{ width: "0%" }}
              animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />

            {steps.map((s, i) => {
              const active = step >= i + 1;
              const current = step === i + 1;
              return (
                <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                  <motion.div
                    animate={{ 
                      scale: current ? 1.2 : 1,
                      backgroundColor: active ? "var(--color-brand)" : "var(--color-background)",
                      borderColor: active ? "var(--color-brand)" : "var(--color-border)",
                      color: active ? "white" : "var(--color-muted-foreground)"
                    }}
                    className="h-10 w-10 rounded-xl border-2 flex items-center justify-center transition-colors shadow-sm"
                  >
                    {active && step > i + 1 ? <CheckCircle2 size={18} /> : s.icon}
                  </motion.div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${active ? "text-brand" : "text-muted-foreground"}`}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[3rem] border border-border bg-card p-12 lg:p-20 shadow-elev text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 grain opacity-10 pointer-events-none" />
                <div className="relative z-10">
                  <div className="h-20 w-20 rounded-[2rem] bg-brand text-white grid place-items-center mx-auto mb-8 shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="font-display text-4xl text-ink mb-4">Pitch Received!</h2>
                  <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
                    Your innovation journey with MR.HUB has officially started. Our investment committee will review your submission and contact you within 48 hours.
                  </p>
                  <button 
                    onClick={() => { setStep(1); setSubmitted(false); }}
                    className="px-8 py-4 rounded-xl bg-ink text-white font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-xl"
                  >
                    Submit Another Idea
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-[2.5rem] border border-border bg-card p-8 lg:p-12 shadow-elev"
              >
                <form onSubmit={(e) => { e.preventDefault(); if(step === 5) setSubmitted(true); else nextStep(); }} className="space-y-8">
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-brand mb-2">
                         <Briefcase size={20} />
                         <h3 className="font-display text-2xl text-ink">Founder Details</h3>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field 
                          label="Founder Name" 
                          placeholder="Jane Doe" 
                          value={formData.founderName}
                          onChange={(e) => updateFormData("founderName", e.target.value)}
                          required
                        />
                        <Field 
                          label="Email Address" 
                          placeholder="jane@startup.com" 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-brand mb-2">
                         <Rocket size={20} />
                         <h3 className="font-display text-2xl text-ink">Startup Essence</h3>
                      </div>
                      <Field 
                        label="Startup Name" 
                        placeholder="Acme AI" 
                        value={formData.startupName}
                        onChange={(e) => updateFormData("startupName", e.target.value)}
                        required
                      />
                      <Field 
                        label="One-line Pitch" 
                        placeholder="The simplest way to automate university operations…" 
                        value={formData.oneLinePitch}
                        onChange={(e) => updateFormData("oneLinePitch", e.target.value)}
                        required
                      />
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-brand mb-2">
                         <Target size={20} />
                         <h3 className="font-display text-2xl text-ink">Market Fit</h3>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Select 
                          label="Category" 
                          options={["AI", "Fintech", "ClimateTech", "HealthTech", "AgriTech", "EdTech", "SaaS", "Other"]} 
                          value={formData.category}
                          onChange={(e) => updateFormData("category", e.target.value)}
                        />
                        <Select 
                          label="Current Stage" 
                          options={["Idea", "Pre-seed", "Seed", "Series A"]} 
                          value={formData.stage}
                          onChange={(e) => updateFormData("stage", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-brand mb-2">
                         <LineChart size={20} />
                         <h3 className="font-display text-2xl text-ink">Traction & Needs</h3>
                      </div>
                      <Field 
                        label="Funding Required" 
                        placeholder="$500,000" 
                        value={formData.fundingRequired}
                        onChange={(e) => updateFormData("fundingRequired", e.target.value)}
                        required
                      />
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">Tell us more (Problem & Traction)</label>
                        <textarea
                          rows={4}
                          placeholder="What problem are you solving? What's your traction so far? Why are you the right team?"
                          value={formData.traction}
                          onChange={(e) => updateFormData("traction", e.target.value)}
                          className="w-full rounded-xl border border-border bg-background px-4 py-4 text-sm outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/5 transition resize-none shadow-sm"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-brand mb-2">
                         <Upload size={20} />
                         <h3 className="font-display text-2xl text-ink">Documentation</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Upload your pitch deck or business plan (PDF) for our team to review.</p>
                      <div
                        className={`relative border-2 border-dashed rounded-[1.5rem] p-10 text-center transition-all cursor-pointer ${pdfFile ? 'border-brand bg-brand/5' : 'border-border bg-secondary/20 hover:border-brand/40'}`}
                        onClick={() => document.getElementById('pdf-upload')?.click()}
                      >
                        <input
                          id="pdf-upload"
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && file.type === 'application/pdf') {
                              setPdfFile(file);
                            }
                          }}
                        />
                        {pdfFile ? (
                          <div className="flex flex-col items-center gap-4">
                            <div className="h-16 w-16 rounded-2xl bg-brand text-white grid place-items-center">
                              <FileText size={32} />
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-ink">{pdfFile.name}</p>
                              <p className="text-xs text-muted-foreground">{(pdfFile.size / 1024 / 1024).toFixed(2)} MB · Click to replace</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-4">
                            <div className="h-16 w-16 rounded-2xl bg-background border border-border text-muted-foreground grid place-items-center group-hover:text-brand transition-colors">
                              <Upload size={32} />
                            </div>
                            <div>
                              <p className="text-lg font-bold text-ink">Drop your PDF here</p>
                              <p className="text-xs text-muted-foreground">Maximum file size: 15MB</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-8 border-t border-border mt-8">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background text-sm font-bold hover:bg-secondary transition-all active:scale-95"
                      >
                        <ArrowLeft size={16} /> Previous
                      </button>
                    ) : <div />}
                    
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 rounded-xl bg-brand text-white text-sm font-bold hover:brightness-110 shadow-lg shadow-brand/20 transition-all active:scale-95"
                    >
                      {step === totalSteps ? "Finish Application" : "Next Step"} <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, ...rest }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full">
      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">{label}</label>
      <input
        {...rest}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border bg-background px-4 py-4 text-sm outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/5 transition shadow-sm"
      />
    </div>
  );
}

function Select({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
  return (
    <div className="w-full">
      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">{label}</label>
      <select 
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border bg-background px-4 py-4 text-sm outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/5 transition shadow-sm appearance-none cursor-pointer"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
