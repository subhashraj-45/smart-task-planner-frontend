
// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; // <-- 🛑 New Import: Box
import Home from "./pages/Home";
import History from "./pages/History";
import Header from "./components/Header";

function App() {
  return (
    // 🛑 CRITICAL CHANGE: Wrap the whole app in Box for the background gradient
    <Box
      sx={{
        minHeight: '100vh',
        // Apply the dark background texture from your icon
        background: 'linear-gradient(135deg, #1A323A 0%, #2F4F4F 50%, #5C3D4D 100%)',
        padding: 0, // Reset default padding
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
