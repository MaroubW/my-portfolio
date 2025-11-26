import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background grid + glows */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft radial glows */}
        <div className="absolute -top-40 left-0 h-80 w-80 bg-emerald-500/25 blur-[110px]" />
        <div className="absolute bottom-[-160px] right-[-80px] h-[420px] w-[420px] bg-sky-500/25 blur-[130px]" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pt-24 pb-16 sm:px-6 lg:grid-cols-[1.2fr,1fr] lg:px-8">
        {/* LEFT SIDE – TEXT */}
        <div>
          {/* small badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-950/80 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Full-stack developer · Student
          </motion.div>

          {/* main title */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Maroub Wajdi
            </span>
            .
            <br className="hidden sm:block" />
            I build modern,{" "}
            <span className="text-emerald-300">futuristic</span> web apps.
          </motion.h1>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base"
          >
            Software engineering student from Tunisia focused on full-stack
            development. I work with React, Tailwind, Spring Boot, Node.js and
            MongoDB to create fast, clean and usable web experiences.
          </motion.p>

          {/* tags */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 flex flex-wrap gap-2 text-[11px]"
          >
            {[
              "React & Tailwind UI",
              "Spring Boot / APIs",
              "MongoDB & SQL",
              "Docker · Git · Heroku",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_40px_rgba(34,197,94,0.35)] transition hover:bg-emerald-400"
            >
              View projects
              <span className="text-lg">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-200 transition hover:border-emerald-400/80 hover:text-emerald-200"
            >
              Contact me
            </a>
          </motion.div>

          {/* quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-8 grid max-w-xs grid-cols-3 gap-4 text-xs text-slate-300"
          >
            <div>
              <p className="text-base font-semibold text-emerald-300">2+</p>
              <p className="text-slate-400">Years coding</p>
            </div>
            <div>
              <p className="text-base font-semibold text-emerald-300">
                Full-stack
              </p>
              <p className="text-slate-400">Web focus</p>
            </div>
            <div>
              <p className="text-base font-semibold text-emerald-300">3+</p>
              <p className="text-slate-400">Real projects</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE – FUTURISTIC CARD */}
        <motion.div
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-cyan-400/30 to-sky-500/40 blur-xl opacity-70" />

          <div className="relative rounded-3xl border border-slate-800 bg-slate-950/90 px-5 py-5 shadow-xl backdrop-blur-xl">
            {/* header row */}
            <div className="mb-4 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live status:{" "}
                <span className="text-emerald-300">Coding</span>
              </span>
              <span>Djerba · TN</span>
            </div>

            {/* “terminal” style box */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-[11px] font-mono text-slate-200">
              <p className="text-emerald-300">
                $ whoami
              </p>
              <p className="mb-3">➜ maroub_wajdi · fullstack-dev</p>

              <p className="text-emerald-300">$ stack --main</p>
              <p>➜ React, Tailwind, Spring Boot, MongoDB</p>

              <p className="mt-3 text-emerald-300">$ goal</p>
              <p>➜ build clean, useful web apps for real users</p>
            </div>

            {/* small tech chips */}
            <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-slate-300">
              {["React", "Tailwind", "Spring Boot", "MongoDB", "Node.js", "Docker"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>

            {/* footer */}
            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
              <span>Arabic · French · English (B2)</span>
              <span className="text-emerald-300">Always learning ⮕</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
