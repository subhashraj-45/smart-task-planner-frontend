// src/components/Header.jsx (FINAL FIX)
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Header() {
  const { pathname } = useLocation();

  return (
    // 🛑 FIX: Explicitly set bgcolor to Deep Teal (#2F4F4F) instead of background.paper
    <AppBar position="sticky" sx={{ bgcolor: '#2F4F4F', color: 'primary.main', elevation: 3 }}>
      <Toolbar>
        {/* Branding - Icon next to Title */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          
          {/* Use <img> tag to display your custom icon */}
          <img 
            src="/stp-icon.ico" // Path to your icon in the public folder
            alt="Smart Task Planner Logo" 
            style={{ width: 32, height: 32, borderRadius: '50%' }} 
          />
          
          <Typography variant="h6" component="h1" fontWeight="bold" color="primary.main">
            Smart Task Planner
          </Typography>
        </Box>

        {/* Themed Buttons (Gold/Primary) */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            variant="contained" // Makes the button solid
            color="primary" // Uses your custom Gold color
            sx={{
              textTransform: 'none',
              // Use secondary color (Salmon) for contrast/hover based on active status
              backgroundColor: pathname === "/" ? 'secondary.main' : 'primary.main',
              '&:hover': { 
                backgroundColor: 'secondary.light', // Lighten salmon on hover
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/history"
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'none',
              backgroundColor: pathname === "/history" ? 'secondary.main' : 'primary.main',
              '&:hover': { 
                backgroundColor: 'secondary.light',
              },
            }}
          >
            History
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
