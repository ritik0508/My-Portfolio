import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";

const drawerWidth = 220;
const navItems = [
  { name: "HOME", id: "home", path: "/" },
  { name: "ABOUT", id: "about", path: "/about" },
  { name: "EDUCATION", id: "education", path: "/education" },
  { name: "SKILLS", id: "skills", path: "/skills" },
  { name: "CONTACT", id: "contact", path: "/contact" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Header component mounted");
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setMobileOpen(true);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100vh",
        paddingTop: "30px",
        textAlign: "center",
        color: "white",
        background: "#11141a",
        fontWeight: "300",
        fontFamily: "Poppins, sans-serif",
        "&:hover": {
          color: "#0ef",
        },
      }}
    >
      <Typography sx={{ color: "#0ef", fontSize: "25px", fontWeight: 600 }}>
        ríԵík
      </Typography>
      <List>
        {navItems.map((item) => {
          return (
            <ListItem
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <Link to={item.path} style={{ textDecoration: "none" }}>
                <ListItemButton
                  sx={{
                    color: isActive(item.path) ? "#0ef" : "#fff",
                  }}
                  key={item.id}
                  onClick={closeDrawer}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          paddingTop: "130px",
        }}
      >
        <a
          style={{ color: "#fff", cursor: "pointer" }}
          href="https://www.linkedin.com/in/ritik-sharma-920191209/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          style={{ color: "#fff", cursor: "pointer" }}
          href="mailto:ritiksharmarrs0508@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <EmailIcon />
        </a>
        <a
          style={{ color: "#fff", cursor: "pointer" }}
          href="https://www.instagram.com/sharmaji__ka__ladkaa/"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          style={{ color: "#fff", cursor: "pointer" }}
          href="https://twitter.com/ritiksharma_05"
          rel="noreferrer"
          target="_blank"
        >
          <XIcon />
        </a>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <p className="cpyright">Copyright &copy; 2024 | Ritik Sharma</p>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#11141a",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Box sx={{ flex: "0.3" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  my: 1,
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "25px",
                  color: "#0ef",
                  display: { sm: "none" },
                }}
              >
                ríԵík
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    sm: "block",
                    textAlign: "left",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 550,
                    fontSize: "30px",
                    color: "#0ef",
                  },
                }}
              >
                ríԵík
              </Typography>
            </Toolbar>
          </Box>
          <Box sx={{ flex: "0.4" }}>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      fontWeight: "300",
                      padding: "0px 25px",
                      // eslint-disable-next-line no-dupe-keys
                      color: isActive(item.path) ? "#0ef" : "#fff",
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
