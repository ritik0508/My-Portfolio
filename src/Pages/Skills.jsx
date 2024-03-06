import React from "react";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
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

const Skills = () => {
  return (
    <>
      <div className="pge-title4">Skills</div>
      <Container id="mainCont">
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia component="img" height="140" src={html} alt="html" />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                HTML
              </Typography>
              <Typography variant="body2" color="#eceff1">
                HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser. It defines the content and structure of web content.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://html.com/"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={css}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                CSS
              </Typography>
              <Typography variant="body2" color="#eceff1">
                Cascading Style Sheets (CSS) is a style sheet language used for
                specifying the presentation and styling of a document written in
                a markup language such as HTML or XML.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={javascript}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                JavaScript
              </Typography>
              <Typography variant="body2" color="#eceff1">
                JavaScript is a scripting language for creating dynamic web page
                content.As of 2024, 98.9% of websites use JavaScript on the
                client side for webpage behavior.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://www.javascript.com/"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={Bootstrap}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Bootstrap
              </Typography>
              <Typography variant="body2" color="#eceff1">
                Bootstrap is a free and open-source CSS framework directed at
                responsive, mobile-first front-end web development. It contains
                HTML, CSS and JavaScript-based design templates
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://getbootstrap.com/"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={materialui}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Material UI
              </Typography>
              <Typography variant="body2" color="#eceff1">
                Material UI is an open-source React component library that
                implements Google's Material Design. It's comprehensive and can
                be used in production out of the box.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://mui.com/material-ui/"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={react}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                React
              </Typography>
              <Typography variant="body2" color="#eceff1">
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on components, maintained by Meta
                along with a community of developers and contributors.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://react.dev/"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={postman}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Postman
              </Typography>
              <Typography variant="body2" color="#eceff1">
                Postman is an API development tool that allows users to design,
                test, and debug APIs, provides a user-friendly interface for
                making HTTP requests, inspecting responses etc.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://www.postman.com/"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={mongodb}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Mongo DB
              </Typography>
              <Typography variant="body2" color="#eceff1">
                MongoDB is a popular NoSQL database management system that uses
                a document-oriented data model. It stores data in flexible,
                JSON-like documents.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_apac-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646476&adgroup=131761130812&cq_cmp=14412646476&gad_source=1&gclid=CjwKCAiA8sauBhB3EiwAruTRJkeXxnpAjDsVaYEk92TgY4O4OeeQLbYH0D7CnOZFx7hPuhaF9ZVfzhoCbxEQAvD_BwE"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={vstudio}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Visual Studio
              </Typography>
              <Typography variant="body2" color="#eceff1">
                Visual Studio is an integrated development environment from
                Microsoft. It is used to develop computer programs including
                websites, web apps, web services and mobile apps.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://visualstudio.microsoft.com/"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea sx={{ paddingTop: "40px" }}>
            <CardMedia
              component="img"
              height="140"
              src={git}
              alt="html"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                sx={{
                  color: "#0ef",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Git
              </Typography>
              <Typography variant="body2" color="#eceff1">
                Git is a distributed version control system that enables
                developers to track changes in their codebase, collaborate with
                others, and manage multiple versions of their projects
                efficiently.
              </Typography>
            </CardContent>
          </CardActionArea>
          <cardActions>
            <Button variant="text" size="small" color="primary">
              <a
                className="Link"
                href="https://git-scm.com/"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </Button>
          </cardActions>
        </Card>
      </Container>
    </>
  );
};

export default Skills;
