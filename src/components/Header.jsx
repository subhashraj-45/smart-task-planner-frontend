// src/components/Header.jsx (MUI Version)
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import BrainIcon from "@mui/icons-material/PsychologyOutlined";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <BrainIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h6" component="h1" fontWeight="bold" color="text.primary">
            Smart Task Planner
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            component={Link}
            to="/"
            color={pathname === "/" ? "primary" : "inherit"}
            sx={{
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': { bgcolor: 'transparent' }
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/history"
            color={pathname === "/history" ? "primary" : "inherit"}
            sx={{
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': { bgcolor: 'transparent' }
            }}
          >
            History
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}