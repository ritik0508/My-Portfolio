import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Contact from "./Pages/Contact.jsx";
import Education from "./Pages/Education.jsx";
import Footer from "./components/Footer.jsx"
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </AnimatePresence>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;