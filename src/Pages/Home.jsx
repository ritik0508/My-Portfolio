import React, { useState,useEffect } from "react";
import "../Styles/Home.css";
import Typewriter from "typewriter-effect";
import HomeImg from "../assets/home-img.png";
import Button from "@mui/material/Button";
import Resume from "../assets/Resume_Ritik.pdf";
import Aos from "aos";
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  const [state] = useState({
    title: "Hello,",
    titleTwo: "I'm",
    titleThree: "Ritik Sharma",
  });

  return (
    <section
      className="home">
      <div className="home-intro" data-aos="fade-right">
        <span className="titleOne">{state.title}</span>
        <span className="titleTwo">{state.titleTwo}</span>
        <span className="titleThree">{state.titleThree}</span>
        <span className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["I'm a Frontend Developer", "I'm a MCA Graduate"],
            }}
          />
        </span>
        <a href={Resume} download={Resume}>
          <Button variant="outlined" size="large" className="button">
            Resume
          </Button>
        </a>
      </div>
      <img className="code-image" src={HomeImg} alt="codeimage" data-aos="fade-left" />
    </section>
  );
};
export default Home;
