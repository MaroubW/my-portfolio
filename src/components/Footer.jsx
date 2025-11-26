export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <span>© {new Date().getFullYear()} Maroub Wajdi. All rights reserved.</span>
        <span>Built with React, Vite & Tailwind CSS.</span>
      </div>
    </footer>
  );
}
