const projects = [
  {
    title: "Private Football Stadium Management",
    period: "2025 – Present",
    stack: ["React", "Tailwind", "Spring Boot", "MongoDB", "Konnect"],
    description:
      "Full web platform for managing bookings, players and online payments for a private football stadium.",
    details: [
      "Real-time availability calendar and booking system.",
      "Secure online payments with Konnect.",
      "Admin dashboard for management and analytics.",
    ],
    link: "https://github.com/ahmed440-coder/takwira.git",
  },
  {
    title: "Student Recipe Management App",
    period: "2024 – 2025",
    stack: ["Flask", "MongoDB", "Heroku"],
    description:
      "A mobile-friendly app that helps students cook with limited budget and simple ingredients.",
    details: [
      "Recipes by ingredients and budget.",
      "Shopping list & cooking time estimation.",
      "Deployed and accessible online.",
    ],
    link: "https://github.com/your-github/student-recipes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Selected{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              projects
            </span>
          </h2>
          <p className="text-xs text-slate-400 hidden sm:block">
            Hands-on experience with real workflows and users.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-24 h-32 bg-gradient-to-b from-emerald-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <header className="flex items-start justify-between gap-3 mb-3 relative">
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {project.description}
                  </p>
                </div>
                <span className="text-[11px] px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80 text-slate-300">
                  {project.period}
                </span>
              </header>

              <div className="flex flex-wrap gap-2 text-[11px] mt-2 mb-3 relative">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full border border-slate-700 bg-slate-950/80 text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 relative">
                {project.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <footer className="mt-4 flex justify-between items-center relative text-xs">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
                  >
                    View on GitHub
                    <span className="text-sm">↗</span>
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
