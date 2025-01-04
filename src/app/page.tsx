import "./page.css";
import About from "@/views/About";
import Navbar from "@/components/Navbar";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";
import HomePage from "@/views/Home";
import Particles_background from "@/components/Particles_background";

export default function Home() {
  return (
    <div className="app" >
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Particles_background />
    </div>
  );
}
