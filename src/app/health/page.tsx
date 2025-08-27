import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import About from "../../components/About";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const Main = () => {
  return (
    <main className="h-full w-full px-4 sm:px-6 md:px-8 lg:px-12">
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
