import React from "react";
import "../Styles/Footer.css";
import { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <footer
      style={{ background: "#11141a", marginTop: "50px",width:"100%",height:"auto"}}
      data-aos="zoom-in-up"
    >
      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "25px",
          color: "#0ef",
          textAlign: "center",
          padding: "30px 0px 25px 0px",
        }}
      >
      ríԵík
      </Typography>
      <Box className="par-Icons">
        <a href="https://www.linkedin.com/in/ritik-sharma-920191209/" rel="noreferrer" target="_blank"><LinkedInIcon className="Icons" /></a>
        <a href="mailto:ritiksharmarrs0508@gmail.com" rel="noreferrer" target="_blank"><EmailIcon className="Icons" /></a>
        <a href="https://www.instagram.com/sharmaji__ka__ladkaa/" rel="noreferrer" target="_blank"><InstagramIcon className="Icons" /></a>
        <a href="https://twitter.com/ritiksharma_05" rel="noreferrer" target="_blank"><XIcon className="Icons" /></a>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <p className="cpyright">Copyright &copy; 2024 | Ritik Sharma</p>
      </Box>
    </footer>
  );
};

export default Footer;
