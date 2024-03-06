import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Contact from "./Pages/Contact.jsx";
import Education from "./Pages/Education.jsx";
import Footer from "./Pages/Footer.jsx"
import { Element as ScrollElement } from "react-scroll";

const App = () => {
  return (
      <div>
        <Header />
        <ScrollElement name="home">
          <Home />
        </ScrollElement>
        <ScrollElement name="about">
          <About />
        </ScrollElement>
        <ScrollElement name="education">
          <Education />
        </ScrollElement>
        <ScrollElement name="skills">
          <Skills />
        </ScrollElement>
        <ScrollElement name="contact">
          <Contact />
        </ScrollElement>
        <Footer />
      </div>
  );
};

export default App;