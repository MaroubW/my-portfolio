import { useState, useEffect } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? "bg-slate-950/90 backdrop-blur border-b border-slate-800/80" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-sm sm:text-base tracking-tight">
          <span className="text-emerald-400">&lt;</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-emerald-400">
            Maroub&nbsp;Wajdi
          </span>
          <span className="text-emerald-400">/&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group"
            >
              <span className="group-hover:text-emerald-400 transition">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full group-hover:w-full transition-all" />
            </a>
          ))}
        </div>

        <a
          href="https://drive.usercontent.google.com/download?id=1W3bXTzWHTEU3-vBk4AYunp_jxxrYajGm&export=download&authuser=0&confirm=t&uuid=fcb5730b-0b84-4b1c-ac63-62b4bd035a8c&at=ALWLOp5UkbIuuTZ47KJ2Zdr_LBof:1764170852379"
          className="hidden sm:inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400 transition"
        >
          <span>Download CV</span>
        </a>
      </nav>
    </header>
  );
}
