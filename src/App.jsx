// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Projects1 from "./components/Projects1";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import AnimatedText from "./components/Animatedtext";
import bg from "./assets/images/Hero/bgresume.jpg";
import { useEffect } from "react";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      
      <Hero />
      <div 
     
     
    >
      <About />
      <Skills />
      <Projects1 />
    </div>
      
      <Contact />
      <footer className="p-3 text-center ">
      
        <h6>RAGHURAM YERRAMSETTI    </h6>
        <AnimatedText />
        <p  className="mb-20">theultimate45 © All CopyRights Reserved 2025</p>
      
      </footer>
    </div>
  );
};

export default App;
