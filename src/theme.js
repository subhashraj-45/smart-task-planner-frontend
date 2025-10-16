import { createTheme } from '@mui/material/styles';

// 🛑 STEP 1: Define your custom colors based on the icon 
const gold = '#C5A35C'; // Primary Gold/Brass
const teal = '#2F4F4F'; // Deep Teal/Blue (Dark Primary/Background)
const salmon = '#D4A4B1'; // Light Salmon/Pink (Accent/Secondary)

const theme = createTheme({
  palette: {
    // Set the primary color to the gold/brass tone
    primary: {
      main: gold, // Used for Buttons, focused Inputs
      contrastText: '#fff', 
    },
    // Set the secondary/accent color to the salmon/pink tone
    secondary: {
      main: salmon, // Used for secondary elements, hover effects
      contrastText: teal,
    },
    // Set a dark background color for the main paper/card elements
    background: {
      default: '#F5F5F5', // Light off-white for main page background
      paper: teal, // Dark teal for Cards/Containers
    },
  },
  
  // 🛑 STEP 2: Style specific components to match the gold/dark theme
  components: {
    MuiPaper: { // Use MuiPaper for the central input card
      styleOverrides: {
        root: {
          backgroundColor: teal, // Dark teal background
          color: gold, // Gold text color
          boxShadow: '0px 0px 15px rgba(197, 163, 92, 0.7)', // Gold glowing shadow
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: gold,
          '&:hover': {
            backgroundColor: '#A88D53', // Darker gold on hover
          },
        },
      },
    },
    MuiTextField: { // Style the input field
        styleOverrides: {
            root: {
                '& .MuiOutlinedInput-root': {
                    color: gold, // Input text is gold
                    '& fieldset': {
                        borderColor: salmon, // Border color
                    },
                    '&:hover fieldset': {
                        borderColor: gold, // Gold border on hover
                    },
                },
                '& .MuiInputLabel-root': {
                    color: salmon, // Label text is salmon
                },
            },
        },
    },
  },
});

export default theme;
