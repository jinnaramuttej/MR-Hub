import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function MacDock() {
  const mouseX = useMotionValue(Infinity);

  const icons = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/MallaReddyUniversity/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/mallareddyuniversity?igsh=aHhqYXE1anNweWp1" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/UniversityMalla" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/mallareddy-university/" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@mallareddyuniversityofficial?si=LbZuMK1AHaRawtqC" },
  ];

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="inline-flex h-16 items-end gap-3 rounded-2xl bg-foreground/5 px-4 pb-2 backdrop-blur-md border border-border shadow-soft"
    >
      {icons.map((item, i) => (
        <DockIcon mouseX={mouseX} key={i} href={item.href} name={item.name}>
          <item.icon className="w-1/2 h-1/2 text-foreground transition-colors group-hover:text-brand" />
        </DockIcon>
      ))}
    </div>
  );
}

function DockIcon({
  mouseX,
  children,
  href,
  name,
}: {
  mouseX: any;
  children: React.ReactNode;
  href: string;
  name: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [45, 80, 45]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      style={{ width, height: width }}
      href={href}
      title={name}
      className="group flex aspect-square items-center justify-center rounded-full bg-background border border-border shadow-soft"
    >
      {children}
    </motion.a>
  );
}
