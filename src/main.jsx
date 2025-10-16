// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

// 🛑 STEP 1: Import MUI's ThemeProvider and your custom theme file
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme.js"; // This imports the theme you defined in src/theme.js

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 🛑 STEP 2: Wrap the App component with ThemeProvider */}
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
    {/* The Toaster remains outside the theme provider, which is correct */}
    <Toaster position="top-center" />
  </React.StrictMode>
);
