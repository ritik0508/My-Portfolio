import React from "react";
import "../Styles/Education.css";
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card from "@mui/material/Card";
import Aos from "aos";
import 'aos/dist/aos.css';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
const Education = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div className="pge-title3">Education</div>
      <Container>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
            marginBottom: "130px",
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent sx={{ color: "#fff" }}>
              2021 - 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent data-aos="fade-up-right" data-aos-delay="300">
              <Card className="eduCard" sx={{ maxWidth: 700, padding: "20px" }}>
                <Typography
                  sx={{
                    color: "#0ef",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Master Of Computer Application (MCA)
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> University :</span> Savitribai
                  Phule Pune University
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Collage :</span> Suryadatta
                  Institute of Management and Mass Communication, Pune
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Percentage :</span> 76%
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ color: "#fff" }}>
              2018 - 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent data-aos="fade-up-left" data-aos-delay="300">
              <Card className="eduCard" sx={{ maxWidth: 700, padding: "20px" }}>
                <Typography
                  sx={{
                    color: "#0ef",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Bachelor Of Computer Application (BCA)
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> University :</span> Sant Gadge
                  Baba Amravati University
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Collage :</span> Shri Shivaji
                  Science College, Amravati
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Percentage :</span> 62%
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ color: "#fff" }}>
              2017 - 2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent data-aos="fade-up-left" data-aos-delay="300">
              <Card className="eduCard" sx={{ maxWidth: 700, padding: "20px" }}>
                <Typography
                  sx={{
                    color: "#0ef",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  HSC
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Board :</span> Maharashtra State
                  Board
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Collage :</span> B.B Arts, N.B
                  Commerce & B.P Science College, Digras
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Percentage :</span> 54%
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ color: "#fff" }}>
              2015 - 2016
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent data-aos="fade-up-left" data-aos-delay="300">
              <Card className="eduCard" sx={{ maxWidth: 700, padding: "20px" }}>
                <Typography
                  sx={{
                    color: "#0ef",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  SSC
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Board :</span> Maharashtra State
                  Board
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> School :</span> Narayanrao
                  Koshatwar English High School, Digras
                </Typography>
                <Typography className="edu-Subpoints">
                  <span className="firstWord"> Percentage :</span> 67%
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </>
  );
};

export default Education;
