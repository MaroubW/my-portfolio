export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-3">
            Let’s build something{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              together
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            I’m open to internships, freelance projects, and collaborations on
            interesting web applications. The best way to reach me is by email
            or phone.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-5 text-sm text-slate-200">
            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">
                  Email
                </p>
                <a
                  href="mailto:contact@maroubwajdi.pro"
                  className="text-emerald-300 hover:text-emerald-200 break-all"
                >
                  contact@maroubwajdi.pro
                </a>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">
                  Phone
                </p>
                <p>+216 93 145 575</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">
                  Location
                </p>
                <p>Djerba Houmet Souk, Tunisia</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">
                  Links
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://github.com/MaroubW"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-200 hover:text-emerald-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maroub-wajdi-aa5957398/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-200 hover:text-emerald-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mb-1">
                  Next step
                </p>
                <p className="text-slate-300 text-xs">
                  Send me a short message about your idea, project or position and
                  I’ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
