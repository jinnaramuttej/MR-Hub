import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MR.HUB" },
      { name: "description", content: "Get in touch with Malla Reddy University Innovation Hub. Reach out for collaborations, mentorship, or startup support." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 93481 61222",
      href: "tel:+919348161222",
      description: "Available during university working hours."
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "info@mallareddyuniversity.ac.in",
      href: "mailto:info@mallareddyuniversity.ac.in",
      description: "We typically respond within 24-48 hours."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Malla Reddy University, Hyderabad",
      href: "https://maps.google.com/?q=Malla+Reddy+University+Hyderabad",
      description: "Maisammaguda, Dulapally, Hyderabad, Telangana 500043"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-background py-20 lg:py-32">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-bold mb-4">Get in touch</p>
            <h1 className="font-display text-5xl lg:text-7xl tracking-tight text-ink mb-6">
              Let's build the <span className="text-brand">future</span> together.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Have a question about our programs, interested in mentoring, or looking to partner with MR.HUB? We're here to help you navigate the innovation ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 lg:py-32 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-8 rounded-[2.5rem] bg-background border border-border hover:border-brand/40 transition-all duration-500 shadow-soft hover:shadow-elev"
              >
                <div className="h-14 w-14 rounded-2xl bg-brand/5 border border-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  {info.icon}
                </div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-2">{info.label}</h3>
                <p className="text-xl font-display text-ink mb-4 group-hover:text-brand transition-colors">{info.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {info.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  Contact Now <ArrowRight size={14} />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 rounded-[3rem] overflow-hidden border border-border bg-ink p-12 lg:p-20 text-center relative"
          >
            <div className="absolute inset-0 opacity-10">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--color-brand),transparent_70%)]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-display text-white mb-6">Ready to start your journey?</h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
                Join the most vibrant startup ecosystem in Hyderabad. From idea validation to capital access, we support you at every stage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:info@mallareddyuniversity.ac.in" className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-sm hover:brightness-110 transition-all active:scale-95">
                  Send an Email
                </a>
                <a href="tel:+919348161222" className="px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-sm hover:bg-white/20 transition-all active:scale-95">
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
