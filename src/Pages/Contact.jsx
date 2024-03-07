import "../Styles/Contact.css";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import 'aos/dist/aos.css'


const ariaLabel = { "aria-label": "description" };
const Contact = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidName(name)) {
      toast.error("Please Enter Your Name!", {
        theme: "dark",
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please Enter Your Email!", {
        theme: "dark",
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    if (!isValidMessage(message)) {
      toast.error("Please Give Some Feedback!", {
        theme: "dark",
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // All fields are valid, proceed with sending the email
    sendEmail();
  };

  const isValidName = (name) => {
    const regex = /^[A-Za-z\s-]+$/;
    return regex.test(name);
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidMessage = (message) => {
    return message.trim().length > 0;
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_rh5tv84",
        "template_e7ex9jf",
        {
          user_email: email,
          user_name: name,
          message: message,
        },
        "G3GhugTft5aT9x3zL"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          // Clear form fields after successful submission
          setName("");
          setEmail("");
          setMessage("");
          // Show toast notification
          toast.success("Thankyou for Your Response!", {
            position: "top-right",
            theme: "dark",
            autoClose: 3000,
          });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div className="pge-title5">Contact</div>
      <p className="subTitle">GET IN TOUCH</p>

      <Container sx={{ marginTop: "40px" }}>
        <Card className="mainCont" data-aos="zoom-out-up">
          <Box
            sx={{
              background: "#1f242d",
              padding: "20px",
              height: "150px",
              margin: "40px",
              width: "auto",
            }}
            data-aos="zoom-out-right"
          >
            <div className="cnt-info" >
              <CallIcon sx={{ color: "#0ef", verticalAlign: "middle" }} />
              <span>+918329755037</span>
            </div>
            <div className="cnt-info">
              <EmailIcon sx={{ color: "#0ef", verticalAlign: "middle" }} />
              <span>ritiksharmarrs0508@gmail.com</span>
            </div>
            <div className="cnt-info">
              <LocationOnIcon sx={{ color: "#0ef", verticalAlign: "middle" }} />
              <span>Pune, Maharshtra</span>
            </div>
          </Box>

          <Box
            sx={{
              background: "#1f242d",
              margin: "40px",
              width: "auto",
              padding: "20px",
            }}
            data-aos="zoom-out-left"
          >
            <form onSubmit={handleSubmit}>
              <Input
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  color: "whitesmoke",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                color="warning"
                placeholder="Your Name"
                inputProps={ariaLabel}
              />
              <Input
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  color: "whitesmoke",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                color="warning"
                placeholder="Your Email"
                inputProps={ariaLabel}
              />
              <Input
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  color: "whitesmoke",
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                color="warning"
                placeholder="Your message"
                multiline
                rows={4}
                inputProps={ariaLabel}
              />
              <Button type="submit" variant="outlined" className="Btn">
                Send
              </Button>
            </form>
            <ToastContainer
              className="toast-container"
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Contact;
