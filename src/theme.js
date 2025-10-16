import { createTheme } from '@mui/material/styles';

// 🛑 STEP 1: Define your custom colors based on the icon 
const gold = '#C5A35C'; // RESERVED for Primary Buttons (GENERATE) and key text
const teal = '#2F4F4F'; // Deep Teal/Blue (New default TEXT/BORDER color)
const salmon = '#D4A4B1'; // Light Salmon/Pink (New default PAPER/CHATBOX background)

const theme = createTheme({
  palette: {
    // Primary remains GOLD (for the GENERATE button)
    primary: {
      main: gold, 
      contrastText: '#fff', 
    },
    // Secondary remains SALMON (can be used for accent hover/links)
    secondary: {
      main: salmon, 
      contrastText: teal,
    },
    // Set background colors
    background: {
      default: '#F5F5F5', // Default light page background (for areas outside the gradient)
      paper: salmon, // 🛑 CHANGE: Use SALMON for Cards/Chatbox Containers
    },
    // Define the teal as a custom text color for high visibility
    text: {
        primary: teal, // 🛑 NEW: Use Deep Teal for all general text
        secondary: teal,
    }
  },
  
  // 🛑 STEP 2: Style specific components to implement the Salmon/Teal look
  components: {
    MuiPaper: { // Use MuiPaper for the central chatbox card
      styleOverrides: {
        root: {
          backgroundColor: salmon, // 🛑 CHANGE: Use SALMON background
          color: teal, // 🛑 CHANGE: Use DEEP TEAL text color
          boxShadow: '0px 0px 15px rgba(47, 79, 79, 0.4)', // Teal glowing shadow
          borderRadius: '12px',
        },
      },
    },
    
    // MuiButton is fine, as it keeps the GENERATE button GOLD (primary)
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: gold,
          '&:hover': {
            backgroundColor: '#A88D53', 
          },
        },
      },
    },
    
    // MuiTextField styles are modified for the new theme contrast
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: teal, // 🛑 CHANGE: Input text is DEEP TEAL
            '& fieldset': {
              borderColor: teal, // 🛑 CHANGE: Border color is DEEP TEAL
            },
            '&:hover fieldset': {
              borderColor: gold, // Keep Gold border on hover for emphasis
            },
          },
          '& .MuiInputLabel-root': {
            color: teal, // 🛑 CHANGE: Label text is DEEP TEAL
          },
        },
      },
    },
  },
});

export default theme;
