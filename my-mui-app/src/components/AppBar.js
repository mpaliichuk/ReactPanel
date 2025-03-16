import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, ListItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

const AppBarComponent = ({ open, setOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem("profile");
    window.location.href = "/"; // Find better fix later, for not it works because it's hard reload
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar color="red">
        <IconButton edge="start" color="inherit" onClick={() => setOpen(!open)} >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sheldon
        </Typography>
        <ListItem sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: location.pathname === "/" ? "cyan" : "inherit",
              textDecoration: location.pathname === "/" ? "underline" : "none",
            }}
          >
            Dashboard
          </Button>
          <Button
            component={Link}
            to="/transformation-cockpit"
            sx={{
              color: location.pathname === "/transformation-cockpit" ? "cyan" : "inherit",
              textDecoration: location.pathname === "/transformation-cockpit" ? "underline" : "none",
            }}
          >
            Transformation Cockpit
          </Button>
          <Button
            component={Link}
            to="/structure"
            sx={{
              color: location.pathname === "/structure" ? "cyan" : "inherit",
              textDecoration: location.pathname === "/structure" ? "underline" : "none",
            }}
          >
            Structure
          </Button>
          <Button
            component={Link}
            to="/repository"
            sx={{
              color: location.pathname === "/repository" ? "cyan" : "inherit",
              textDecoration: location.pathname === "/repository" ? "underline" : "none",
            }}
          >
            Repository
          </Button>
          <Button
            component={Link}
            to="/reports"
            sx={{
              color: location.pathname === "/reports" ? "cyan" : "inherit",
              textDecoration: location.pathname === "/reports" ? "underline" : "none",
            }}
          >
            Reports
          </Button>
          <Button
            component={Link}
            to="/admin"
            sx={{
              color: location.pathname === "/admin" ? "cyan" : "inherit",
              textDecoration: location.pathname === "/admin" ? "underline" : "none",
            }}
          >
            Admin
          </Button>
        </ListItem>

        <Box sx={{ display: "flex", gap: 2 }}>
      <IconButton edge="start" color="inherit" onClick={() => setOpen(!open)}>
        <HelpIcon />
      </IconButton>
      <IconButton edge="start" color="inherit" onClick={() => setOpen(!open)}>
        <NotificationsIcon />
      </IconButton>
      <IconButton edge="start" color="inherit" onClick={() => setOpen(!open)}>
        <AccessTimeIcon />
      </IconButton>
      {profile ? (
            <>
                <Typography variant="body1" sx={{ color: "white", marginRight: 1 }}>
                Welcome, {profile.given_name}
              </Typography>
              <Avatar alt={profile.name} src={profile.picture} />
              <Button component={Link} to="/" color="inherit" onClick={logOut}  >
                Logout
              </Button>
               
            </>
          ) : (
            <Avatar alt="User" src="/profile.jpg" />
           
          )}
    </Box>
      
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
