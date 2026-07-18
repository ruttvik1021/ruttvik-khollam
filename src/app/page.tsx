import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
