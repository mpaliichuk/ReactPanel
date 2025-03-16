import React, { useContext } from "react";
import { ThemeProvider, CssBaseline, Button, Typography, Box, Paper } from "@mui/material";
import theme from "./theme";
import Layout from "./components/Layout";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { profile, login } = useContext(AuthContext);

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
              width: "50%",
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
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Sheldon
            </Typography>
            <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
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
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                fontWeight: "bold"
              }}
            >
              Login
            </Typography>
            <Paper sx={{ padding: 4, textAlign: "center", width: "100%", maxWidth: 400, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Welcome to Sheldon!
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Please log in with Google to continue.
              </Typography>
              <Button
                variant="contained"
                color="black"
                sx={{
                  width: "100%",
                  padding: "12px 0",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  borderRadius: 2,
                }}
                onClick={login}
              >
                <img
                  src="https://img.icons8.com/color/512/google-logo.png"
                  alt="Google logo"
                  width={20}
                  height={20}
                />
                Login with Google
              </Button>
            </Paper>
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
