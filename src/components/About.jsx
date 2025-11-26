export default function About() {
  return (
    <section id="about" className="py-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:items-start">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                me
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              I’m currently studying Software Engineering & Computer Science at the
              Faculty of Sciences of Monastir (2023–2025). I’m focused on web
              development, distributed systems, algorithms and AI.
            </p>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              I enjoy building full-stack applications where performance, UX and
              clean architecture come together — from booking systems to tools for
              students with limited resources.
            </p>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Outside of coding, I like exploring new technologies, contributing to
              personal projects, and improving my problem-solving skills.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
              <h3 className="text-sm font-medium text-slate-200 mb-4">
                Journey
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-slate-100">Bachelor in Software Engineering</p>
                    <p className="text-slate-400 text-xs">
                      Faculty of Sciences of Monastir · 2023–2025
                    </p>
                    <p className="mt-1 text-slate-400 text-xs">
                      Web dev, databases, distributed systems, algorithms, AI.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <div>
                    <p className="text-slate-100">Football stadium management app</p>
                    <p className="text-slate-400 text-xs">2025 · Full-stack</p>
                    <p className="mt-1 text-slate-400 text-xs">
                      Real-time booking, payments, admin dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <div>
                    <p className="text-slate-100">Student recipe app</p>
                    <p className="text-slate-400 text-xs">2024–2025 · Backend & UI</p>
                    <p className="mt-1 text-slate-400 text-xs">
                      Recipes, shopping lists, budget and time estimation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-slate-400 mb-1">Focus</p>
                  <p className="text-slate-100">Full-stack web</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-slate-400 mb-1">Mindset</p>
                  <p className="text-slate-100">Clean & scalable</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-slate-400 mb-1">Goal</p>
                  <p className="text-slate-100">Build real products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
