import React, { createContext, useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
              Accept: "application/json",
            },
          }
        );
        setProfile(res.data);
        localStorage.setItem("profile", JSON.stringify(res.data));
      } catch (err) {
        console.error("Error fetching Google profile:", err);
      }
    },
    onError: (error) => console.error("Google Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem("profile");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ profile, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
