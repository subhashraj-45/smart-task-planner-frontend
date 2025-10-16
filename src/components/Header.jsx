// src/components/Header.jsx (FINAL MUI THEMED VERSION)
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// You will no longer need the MUI BrainIcon import, we'll use an HTML <img> tag

// You can use a dedicated component for the icon, or for simplicity, 
// just use an <img> tag pointing to the public folder asset.

export default function Header() {
  const { pathname } = useLocation();

  return (
    // 🛑 CHANGE 1: Apply Teal/Salmon background color from your custom theme
    <AppBar position="sticky" sx={{ bgcolor: 'background.paper', color: 'primary.main', elevation: 3 }}>
      <Toolbar>
        {/* 🛑 CHANGE 2: Branding - Icon next to Title */}
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

        {/* 🛑 CHANGE 3: Themed Buttons (Gold/Primary) */}
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
