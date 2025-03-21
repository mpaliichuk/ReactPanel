import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AppBarComponent from "./AppBar";
import Sidebar from "./Sidebar";
import DataTable from "./DataTable";
import Dashboard from "../pages/Dashboard";
import TransformationCockpit from "../pages/TransformationCockpit";
import Structure from "../pages/Structure";
import Repository from "../pages/Repository";
import Reports from "../pages/Reports";
import Admin from "../pages/Admin";

const Layout = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar open={open} setOpen={setOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <AppBarComponent open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transformation-cockpit" element={<TransformationCockpit />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/repository" element={<Repository />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        {/* Only show DataTable if the user is on the admin page */}
        {location.pathname === "/admin" && <DataTable />}
      </Box>
    </Box>
  );
};

const AppWrapper = () => (
  <Router>
    <Layout />
  </Router>
);

export default AppWrapper;
