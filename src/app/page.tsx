import Image from "next/image";
import styles from "./page.module.css";
import Content from "@/views/About";
import Navbar from "@/components/Navbar";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";

export default function Home() {
  return (
    <div >
      <Navbar />
      <Content />
      <Projects />
      <Contact />
    </div>
  );
}
