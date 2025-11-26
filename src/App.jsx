import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import LogoLoader from "./components/LogoLoader.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleFinish = () => setLoading(false);

  return (
    <div>
      {loading && <LogoLoader onFinish={handleFinish} />}

      {!loading && (
        <>
          <Header />
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
