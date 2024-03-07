import React,{useEffect} from "react";
import { Container,Typography,CardMedia,CardContent,Card,CardActions,CardActionArea,Button } from "@mui/material";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import Bootstrap from "../assets/Bootstrap.png";
import materialui from "../assets/materialui.png";
import react from "../assets/react.png";
import postman from "../assets/postman.png";
import mongodb from "../assets/mongodb.png";
import vstudio from "../assets/vstudio.png";
import git from "../assets/git.png";
import "../Styles/Skills.css";
import Aos from "aos";
import 'aos/dist/aos.css'


const SkillCard = ({ title, description, link, imageSrc }) => (
  
  <Card className="card" sx={{ maxWidth: 345}} data-aos="fade-up"
  data-aos-offset="300"
  data-aos-easing="ease-in-sine">
    <CardActionArea sx={{ paddingTop: "40px" }}>
      <CardMedia component="img" height="140" src={imageSrc} alt={title} sx={{ objectFit: "contain" }} />
      <CardContent>
        <Typography sx={{ color: "#0ef", fontFamily: "Poppins, sans-serif", fontWeight: 600 }} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#eceff1">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{justifyContent:"center"}}>
      <Button variant="text" size="small" color="primary" textAlign="center">
        <a className="Link" href={link} rel="noreferrer" target="_blank">
          View More
        </a>
      </Button>
    </CardActions>
  </Card>
);



const Skills = () => {
  useEffect(()=>{
    Aos.init({});
  },[])
  return (
    <>
      <div className="pge-title4">Skills</div>
      <Container id="mainCont">
        <SkillCard
          title="HTML"
          description="HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content."
          link="https://html.com/"
          imageSrc={html}
          
          
        />
        <SkillCard
          title="CSS"
          description="Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML."
          link="https://www.w3.org/Style/CSS/Overview.en.html"
          imageSrc={css}
        />
        <SkillCard
          title="JavaScript"
          description="JavaScript is a scripting language for creating dynamic web page content. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior."
          link="https://www.javascript.com/"
          imageSrc={javascript}
        />
        <SkillCard
          title="Bootstrap"
          description="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates."
          link="https://getbootstrap.com/"
          imageSrc={Bootstrap}
        />
        <SkillCard
          title="Material UI"
          description="Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box."
          link="https://mui.com/material-ui/"
          imageSrc={materialui}
        />
        <SkillCard
          title="React"
          description="React is a free and open-source front-end JavaScript library for building user interfaces based on components, maintained by Meta along with a community of developers and contributors."
          link="https://react.dev/"
          imageSrc={react}
        />
        <SkillCard
          title="Postman"
          description="Postman is an API development tool that allows users to design, test, and debug APIs, provides a user-friendly interface for making HTTP requests, inspecting responses etc."
          link="https://www.postman.com/"
          imageSrc={postman}
        />
        <SkillCard
          title="Mongo DB"
          description="MongoDB is a popular NoSQL database management system that uses a document-oriented data model. It stores data in flexible, JSON-like documents."
          link="https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_apac-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646476&adgroup=131761130812&cq_cmp=14412646476&gad_source=1&gclid=CjwKCAiA8sauBhB3EiwAruTRJkeXxnpAjDsVaYEk92TgY4O4OeeQLbYH0D7CnOZFx7hPuhaF9ZVfzhoCbxEQAvD_BwE"
          imageSrc={mongodb}
        />
        <SkillCard
          title="Visual Studio"
          description="Visual Studio is an integrated development environment from Microsoft. It is used to develop computer programs including websites, web apps, web services and mobile apps."
          link="https://visualstudio.microsoft.com/"
          imageSrc={vstudio}
        />
        <SkillCard
          title="Git"
          description="Git is a distributed version control system that enables developers to track changes in their codebase, collaborate with others, and manage multiple versions of their projects efficiently."
          link="https://git-scm.com/"
          imageSrc={git}
        />
      </Container>
    </>
  );
};

export default Skills;
