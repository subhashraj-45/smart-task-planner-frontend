// Example Header Component Update (Targeting the Background Color)
// Assuming your header component code looks similar to this:

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// ... other imports ...

export default function Header() {
  return (
    <AppBar 
        position="static" 
        elevation={0} // Remove shadow since the page background is white
        sx={{ 
            // 🛑 CHANGE: Set Header background to a specific deep teal color
            bgcolor: '#2F4F4F', 
            color: 'white', // Ensure text is white against the dark background
        }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography 
                variant="h6" 
                component="div" 
                fontWeight="bold"
            >
                Smart Task Planner
            </Typography>
        </Box>
        {/* Button colors remain the contrasting Light Salmon and Gold */}
        <Button 
            color="inherit" 
            sx={{ 
                bgcolor: 'lightsalmon', // Using a standard CSS name for Light Salmon
                color: 'white', 
                mx: 1, 
                '&:hover': { bgcolor: 'salmon' } 
            }}
        >
            Home
        </Button>
        <Button 
            color="inherit" 
            sx={{ 
                bgcolor: 'primary.main', // Assuming 'primary.main' is your Blur Gold/Bronze
                color: 'white', 
                '&:hover': { bgcolor: 'primary.dark' } 
            }}
        >
            History
        </Button>
      </Toolbar>
    </AppBar>
  );
}
