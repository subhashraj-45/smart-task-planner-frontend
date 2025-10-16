// src/App.jsx (FINAL VERSION WITH WHITE BACKGROUND)

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; 
import Home from "./pages/Home";
import History from "./pages/History";
import Header from "./components/Header";

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        // 🛑 CRITICAL CHANGE: Set the background to plain White
        background: 'FAF3E0', // Or 'white' or 'background.default' if using MUI theme
        padding: 0, 
      }}
    >
      <Router>
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </Router>
    </Box>
  );
}

export default App;
