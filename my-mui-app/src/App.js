import React, { useContext, useState } from "react";
import { ThemeProvider, CssBaseline, Button, Typography, Box, Paper, TextField, Divider } from "@mui/material";
import theme from "./theme";
import Layout from "./components/Layout";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { profile, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {profile ? (
        <Layout />
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            borderRadius: "16px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "60%",
              backgroundColor: "#1C1C1C",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
              position: "relative",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
              boxShadow: "inset 0px 0px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/common-ui-bold/96/12_Apple_Command-512.png"
                alt="Logo"
                style={{ width: "40px", height: "40px", marginRight: "8px" }}
              />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Sheldon
              </Typography>
              
            </Box>
            <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "60%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: 4,
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
              position: "relative",
              boxShadow: "inset 0px 0px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
              Create an account
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Enter your email below to create your account
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2, width:"60%" }}
            />
                        <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                fontWeight: "bold",
              }}
            >
              Login
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "60%", padding: "12px 0", fontWeight: "bold", borderRadius: 2, mb: 2,backgroundColor: "#000000" }}
            >
              Sign In with Email
            </Button>
            <Divider sx={{ width: "60%", my: 2 }}>OR CONTINUE WITH</Divider>
            <Button
              variant="outlined"
              color="black"
              sx={{
                width: "60%",
                padding: "12px 0",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                borderRadius: 2,
                mb: 2,
                color:"black"
              }}
              onClick={login}
            >
              <img
                src="https://img.icons8.com/color/512/google-logo.png"
                alt="GitHub logo"
                width={20}
                height={20}
              />
              Google
            </Button>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center", mt: 2 }}>
              By clicking continue, you agree to our <u>Terms<br/> of Service</u> and <u>Privacy Policy</u>.
            </Typography>
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;