import React from "react";
import "../Styles/About.css";
import Card from "@mui/material/Card";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <>
      <Box className="pge-title1">About Me</Box>
      <Container
        className="main-Cont"
        sx={{ marginBottom: "130px", textAlign: "justify" }}
      >
        <Card sx={{ background: "#11141a", color: "#fff", padding: "30px" }}>
          <Typography
            className="paras"
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              paddingBottom: "20px",
            }}
          >
            Hey there! I'm Ritik Sharma, a recent Master's graduate in Computer
            Application, originally from Digras, Yavatmal, and currently based
            in Pune. I hold a Bachelor's degree in Computer Application from
            Shri Shivaji Science College, Amravati, and a Master's from
            Suryadatta Institute of Management and Mass Communication, Pune.
          </Typography>
          <Typography
            className="paras"
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              paddingBottom: "20px",
            }}
          >
            I'm deeply passionate about front-end development and love creating
            captivating user experiences. Proficient in HTML5, CSS3, Bootstrap,
            and Material UI, I pride myself on bringing creativity and precision
            to every project. I specialize in crafting dynamic and responsive
            web applications using JavaScript, React, and MongoDB. I've also
            completed a MERN stack certification, further enhancing my skills
            and expertise in the field.
          </Typography>
          <Typography
            className="paras"
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              paddingBottom: "20px",
            }}
          >
            Eager to contribute my skills and enthusiasm to innovative projects,
            and make a real impact. I'm enthusiastic about the opportunity to
            collaborate with your organization and contribute to its success.
          </Typography>
        </Card>
      </Container>
    </>
  );
};

export default About;
