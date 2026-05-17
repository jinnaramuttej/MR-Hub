export type Idea = {
  id: string;
  name: string;
  pitch: string;
  funding: string;
  raised: number; // pct
  category: string;
  founder: string;
  location?: string;
  stage?: "Idea" | "Pre-seed" | "Seed" | "Series A";
  problem?: string;
  solution?: string;
  traction?: string;
  ask?: string;
  batch?: string;
  isFeatured?: boolean;
};

export const ideas: Idea[] = [
  { id: "loomline", name: "Loomline", pitch: "AI copilot that turns sales calls into closed deals.", funding: "$1.2M", raised: 64, category: "AI", founder: "Priya Natarajan", location: "Bengaluru", stage: "Seed", problem: "Sales reps lose 40% of pipeline because no one captures call commitments.", solution: "Live transcription + CRM auto-fill + AI follow-up drafts, in-call.", traction: "$420K ARR, 38 paying teams, 14% MoM growth.", ask: "$1.2M to expand into US mid-market and hire two AEs.", batch: "S26", isFeatured: true },
  { id: "harvest-os", name: "Harvest OS", pitch: "Operating system for small organic farms across India.", funding: "$800K", raised: 41, category: "AgriTech", founder: "Daniel Okafor", location: "Hyderabad", stage: "Pre-seed", problem: "12M small farmers run their entire operation on paper notebooks.", solution: "Offline-first mobile app for crop planning, input tracking and direct buyer matching.", traction: "1,800 farms in pilot across Telangana, 92% monthly retention.", ask: "$800K to expand to 4 states and onboard 25K farms.", batch: "S26" },
  { id: "northwind", name: "Northwind", pitch: "Carbon-negative shipping for last-mile e-commerce.", funding: "$2.4M", raised: 78, category: "ClimateTech", founder: "Mei Tanaka", location: "Singapore", stage: "Seed", problem: "Last-mile delivery is 28% of e-commerce emissions.", solution: "Electric fleet network + verified carbon removal credits per shipment.", traction: "Live with Shopify Plus brands across 6 cities, 2.1M parcels delivered.", ask: "$2.4M to launch in Jakarta and Manila.", batch: "W25" },
  { id: "pocket-clinic", name: "Pocket Clinic", pitch: "Affordable telehealth for tier-3 cities, Hindi-first.", funding: "$650K", raised: 52, category: "HealthTech", founder: "Arjun Mehta", location: "Lucknow", stage: "Pre-seed", problem: "70% of India's specialists live in 10 cities. Everyone else waits weeks.", solution: "WhatsApp-native consults with vernacular AI triage, ₹99/visit.", traction: "26K consults completed, NPS 71, 4 hospital partners.", ask: "$650K to expand to UP and Bihar.", batch: "W25" },
  { id: "crumb", name: "Crumb", pitch: "Cloud kitchen network for high-protein desi snacks.", funding: "$400K", raised: 88, category: "Food", founder: "Sara Iyer", location: "Mumbai", stage: "Pre-seed", problem: "Healthy Indian snacks are either expensive or full of palm oil.", solution: "Ghost-kitchen model producing 12 SKUs across 3 cities, D2C + quick-commerce.", traction: "₹38L MRR, 4.6 rating across 11K reviews.", ask: "$400K to launch in Delhi and Pune.", batch: "S26" },
  { id: "ledgerly", name: "Ledgerly", pitch: "GST + bookkeeping copilot for solo founders.", funding: "$1.5M", raised: 33, category: "Fintech", founder: "Ravi Shankar", location: "Pune", stage: "Seed", problem: "Solo founders waste 8 hrs/month on GST and miss filing deadlines.", solution: "AI bookkeeper that ingests invoices from Gmail, files GST automatically.", traction: "1,400 paying users, ₹62L ARR, 9% MoM growth.", ask: "$1.5M to launch payroll and TDS modules.", batch: "W25" },
];

export const podcasts = [
  { 
    title: "How to Pitch Your Startup in 3 Minutes", 
    host: "with Michael Seibel (YC)", 
    duration: "12 min", 
    topic: "The masterclass on delivering a high-impact startup pitch that gets results.",
    videoUrl: "https://youtu.be/Pydut1BMlBw?si=B1KxXmYcuEe7AMGg",
    thumbnail: "https://img.youtube.com/vi/Pydut1BMlBw/maxresdefault.jpg"
  },
  { 
    title: "Find Your First 10 Customers", 
    host: "with Michael Seibel (YC)", 
    duration: "22 min", 
    topic: "How to validate your problem and find early adopters without a marketing budget.",
    videoUrl: "https://www.youtube.com/watch?v=nwZDTWJt7lI",
    thumbnail: "https://img.youtube.com/vi/nwZDTWJt7lI/maxresdefault.jpg"
  },
  { 
    title: "10 Mistakes of First-Time Founders", 
    host: "with Michael Seibel (YC)", 
    duration: "15 min", 
    topic: "Avoid the most common traps that kill early-stage startups.",
    videoUrl: "https://youtu.be/gZ28sJ2xCaI?si=MZ8P0nFS4y2ofdIe",
    thumbnail: "https://img.youtube.com/vi/gZ28sJ2xCaI/maxresdefault.jpg"
  },
  { 
    title: "How to Build a Great Product", 
    host: "with Michael Seibel (YC)", 
    duration: "25 min", 
    topic: "Focusing on what users actually want and ignoring the noise.",
    videoUrl: "https://youtu.be/9z0MKlXP1gY?si=TJEnTA5DysYvbraq",
    thumbnail: "https://img.youtube.com/vi/9z0MKlXP1gY/maxresdefault.jpg"
  },
  { 
    title: "Startup Idea vs Execution", 
    host: "with Michael Seibel (YC)", 
    duration: "20 min", 
    topic: "Why the idea is worth nothing and execution is everything.",
    videoUrl: "https://youtu.be/oM0uHKSSiV0?si=ebaM2MnQ0g7-_mZQ",
    thumbnail: "https://img.youtube.com/vi/oM0uHKSSiV0/maxresdefault.jpg"
  },
];

export const testimonials = [
  { quote: "We closed our seed round in 19 days through MR.HUB. The investor matching is unreasonably good.", name: "Priya Natarajan", role: "Founder, Loomline" },
  { quote: "The deal flow is the most curated I've seen outside of YC. I write checks here weekly.", name: "James Holloway", role: "Partner, Northstar Ventures" },
  { quote: "MR.HUB helped us reach investors who actually understand climate. Real conversations, no noise.", name: "Mei Tanaka", role: "CEO, Northwind" },
];

export type Program = {
  id: string;
  name: string;
  duration: string;
  format: string;
  next: string;
  blurb: string;
  perks: string[];
};

export const programs: Program[] = [
  {
    id: "acceleration",
    name: "Startup Acceleration Program",
    duration: "6 months",
    format: "Hybrid · On-campus + remote",
    next: "Launch: June 13, 2026",
    blurb: "A special 6-month program designed to support startups with mentorship, training, networking, guidance, and business development opportunities to help them grow successfully.",
    perks: ["Mentorship & Training", "Business Development", "Investor Connect Opportunities", "Product & Market Strategy"],
  },
  {
    id: "scale",
    name: "Scale",
    duration: "16 weeks",
    format: "On-campus · Hyderabad",
    next: "Cohort opens Oct 2026",
    blurb: "For seed-stage teams ready to break into international markets. Office space, growth playbooks, intros to global GTM partners.",
    perks: ["On-campus office for 16 weeks", "Dedicated growth coach", "Intros to 60+ enterprise buyers", "Follow-on capital up to $500K"],
  },
  {
    id: "deeptech",
    name: "DeepTech Residency",
    duration: "26 weeks",
    format: "Lab + workshop · Bengaluru",
    next: "Applications rolling",
    blurb: "For technical founders building in robotics, climate, semiconductors and bio. Wet lab access, hardware grant, IP support.",
    perks: ["Lab + prototyping access", "$150K non-dilutive grant", "IP + patent legal support", "DPIIT recognition"],
  },
];

export type EventItem = {
  id: string;
  title: string;
  date: string;
  city: string;
  format: string;
  audience: string;
};

export const events: EventItem[] = [
  { id: "isme-2026", title: "India's Startup Mega Expo 2026", date: "Jun 13, 2026", city: "Hyderabad", format: "In person", audience: "Startups, Investors, Corporates" },
  { id: "demo-day-summer", title: "Summer '26 Demo Day", date: "Aug 28, 2026", city: "Hyderabad + livestream", format: "Hybrid", audience: "Open · 1,200 expected" },
  { id: "ama-jul", title: "AMA with Vinod Sridhar (Helix Capital)", date: "Jul 09, 2026", city: "Online", format: "Virtual", audience: "Founders only" },
  { id: "founder-dinner", title: "Founder Dinner: Climate Cohort", date: "Jul 22, 2026", city: "Mumbai", format: "Invite-only", audience: "Climate founders + LPs" },
  { id: "deeptech-summit", title: "DeepTech India Summit", date: "Sep 11, 2026", city: "Bengaluru", format: "Conference", audience: "Open · 800 expected" },
  { id: "office-hours", title: "Investor Office Hours", date: "Every Friday", city: "Online", format: "1:1 slots", audience: "Vetted founders" },
];

export type Mentor = {
  id: string;
  name: string;
  role: string;
  expertise: string;
  bio: string;
  initials: string;
  tone: string; // bg color hint
};

export const mentors: Mentor[] = [
  { id: "ks", name: "Kavita Subramanian", role: "Ex-VP Product, Razorpay", expertise: "0→1 fintech, payments, compliance", bio: "Shipped UPI rails to 50M users. Now angel-investing in early fintech.", initials: "KS", tone: "oklch(0.78 0.13 45)" },
  { id: "as", name: "Adrian Soto", role: "Founder, Northstar Ventures", expertise: "Seed strategy, GTM in LATAM + India", bio: "Closed 14 seed rounds last year. Particularly loves vertical SaaS.", initials: "AS", tone: "oklch(0.65 0.15 240)" },
  { id: "mh", name: "Mei-Lin Hu", role: "Climate Lead, Lumen Partners", expertise: "Climate, hardware, manufacturing", bio: "Wrote the first checks into 3 unicorn climate companies.", initials: "MH", tone: "oklch(0.7 0.14 160)" },
  { id: "rj", name: "Rohan Joshi", role: "CTO-in-Residence", expertise: "Engineering hiring, infra, AI", bio: "Built the data platform at Swiggy from 0 to 200M req/day.", initials: "RJ", tone: "oklch(0.6 0.17 290)" },
  { id: "fa", name: "Fatima Al-Rashid", role: "Brand Director, Cedar & Co", expertise: "Brand, narrative, fundraising decks", bio: "Designed identities for 40+ funded startups.", initials: "FA", tone: "oklch(0.72 0.14 30)" },
  { id: "tn", name: "Tomás Nuñez", role: "Operating Partner, Atlas", expertise: "Series A readiness, board prep", bio: "Coached 22 founders into successful A rounds.", initials: "TN", tone: "oklch(0.55 0.14 200)" },
];

export const partners = [
  "Northstar VC", "Helix Capital", "Lumen Partners", "Cedar & Co", "Bright Seed",
  "Atlas Ventures", "Kalpa Capital", "Indus Angels", "Forge VC", "Arcadia",
];

export const news = [
  { source: "TechCrunch", title: "MR.HUB facilitates $84M in early-stage funding across India and SEA", date: "Apr 2026" },
  { source: "YourStory", title: "Why MR.HUB's Launchpad cohort had a 71% follow-on rate", date: "Mar 2026" },
  { source: "Forbes India", title: "30 under 30: Five MR.HUB alumni named", date: "Feb 2026" },
  { source: "Inc42", title: "Inside Pocket Clinic's $650K raise — closed in 14 days", date: "Jan 2026" },
];