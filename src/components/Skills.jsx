const skills = [
  {
    category: "Frontend",
    items: ["React", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Flask", "Node.js (Express)"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Heroku", "Postman"],
  },
  {
    category: "Payments & APIs",
    items: ["Stripe", "Konnect", "REST APIs"],
  },
  {
    category: "Languages",
    items: ["Arabic (native)", "French (fluent)", "English (B2)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-6">
          Tech&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            stack
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5"
            >
              <h3 className="text-sm font-medium text-slate-100 mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
