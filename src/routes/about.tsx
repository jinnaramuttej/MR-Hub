import { createFileRoute, Link } from "@tanstack/react-router";
import { partners, news } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import studentsPic from "@/assets/students_pic.jpeg";
import campusPic from "@/assets/campus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MR.HUB" },
      { name: "description", content: "MR.HUB is an innovation ecosystem connecting startups, corporates, investors, mentors, and academia." },
      { property: "og:title", content: "About MR.HUB" },
      { property: "og:description", content: "A future-ready ecosystem for innovation, entrepreneurship, and industry collaboration." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-widest text-brand font-medium">About</p>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl tracking-tight max-w-4xl">
            About MR.HUB @ Malla Reddy University
          </h1>
          <div className="mt-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                MR-Hub is the premier innovation ecosystem at Malla Reddy University, connecting entrepreneurship,
                technology, research, and industry collaboration in one platform. It
                brings startups, corporates, investors, mentors, and the university
                innovation communities together to turn ideas into scalable ventures
                and future-ready businesses.
              </p>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                The ecosystem enables startup showcases, corporate interactions,
                investor connections, and strategic partnerships, while promoting
                AI-driven innovation and emerging technologies that align with
                global market needs.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img src={studentsPic} alt="Malla Reddy University Students" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-4 gap-8">
          {[
            ["50,000+", "Innovation-focused students"],
            ["10,000+", "Faculty & mentors"],
            ["25+", "Startup ecosystems"],
            ["AI", "Future-tech focus"],
          ].map(([k, l]) => (
            <div key={l} className="border-l-2 border-brand pl-5">
              <p className="font-display text-4xl">{k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-3">
          {[
            ["Vision", "Build a powerful ecosystem that promotes innovation, supports startup growth, encourages AI and future technologies, and strengthens industry-academia collaboration."],
            ["Mission", "Unite startups, corporates, investors, mentors, and academic institutions to enable collaboration, technology adoption, and long-term entrepreneurial growth."],
            ["Objectives", "Accelerate startups, connect them to mentors and investors, enable strategic networking, and expand market and business opportunities."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h2 className="font-display text-2xl">{title}</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl">How MR.HUB works</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              MR HUB operates through corporate partnerships, startup showcases,
              pitch sessions, mentorship programs, and innovation workshops. The
              platform drives knowledge exchange, investment readiness, and
              strategic business collaboration across industries.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Startup incubation and mentoring",
                "Investor and corporate networking",
                "Innovation challenges and showcases",
                "AI and emerging technology initiatives",
                "Workshops, training, and skill development",
              ].map((item) => (
                <p key={item} className="text-sm text-muted-foreground">• {item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img src={campusPic} alt="MR HUB Boardroom Meeting" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="font-display text-2xl">Screening and progress</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Startups are evaluated on innovation, market potential, scalability,
                and technology integration. Progress is tracked through milestone
                reviews, mentorship feedback, and business development analysis.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                The incubation cell coordinates partnerships, programs, and founder
                support to ensure steady growth and industry relevance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl">Programs and platforms</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Incubation Hub",
                "A launchpad for founders with mentorship, labs, corporate access, and startup showcases across AI, healthcare, fintech, and sustainability.",
              ],
              [
                "Pitch Studio",
                "A corporate innovation showcase where startups present to investors, mentors, and industry leaders to unlock partnerships and funding.",
              ],
              [
                "MR HUB Podcast",
                "Founder and executive conversations on innovation, leadership, market trends, and business scaling with ecosystem visibility.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl">From idea to employment</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            MR HUB supports the journey from idea validation to market launch by
            combining mentorship, corporate access, funding pathways, and
            business development support. The goal is to grow scalable ventures
            that create jobs and long-term economic impact.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Identify and validate ideas",
              "Mentorship and strategy",
              "Pitch and partnerships",
              "Scale and create jobs",
            ].map((step) => (
              <div key={step} className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl">Capital partners.</h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6">
            {partners.map((n) => (
              <span key={n} className="font-display text-lg text-muted-foreground/90 hover:text-foreground transition-colors">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl">In the press.</h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {news.map((n) => (
              <li key={n.title} className="py-6 grid grid-cols-12 gap-4 items-center">
                <p className="col-span-12 sm:col-span-2 text-xs uppercase tracking-widest text-muted-foreground">{n.source}</p>
                <p className="col-span-12 sm:col-span-8 font-display text-lg">{n.title}</p>
                <p className="col-span-12 sm:col-span-2 text-sm text-muted-foreground sm:text-right">{n.date}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-lg bg-ink text-background p-10 lg:p-14">
            <h3 className="font-display text-3xl lg:text-4xl max-w-2xl">
              Contact MR HUB
            </h3>
            <p className="mt-4 text-sm text-background/80 max-w-2xl">
              Malla Reddy University, Hyderabad, Telangana 500043
            </p>
            <p className="mt-2 text-sm text-background/80">Email: info@mallareddyuniversity.ac.in</p>
            <p className="mt-1 text-sm text-background/80">Phone: +91 93481 61222</p>
            <p className="mt-1 text-sm text-background/80">Website: www.mallareddyuniversity.ac.in</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}