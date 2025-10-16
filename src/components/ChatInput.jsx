// src/components/ChatInput.jsx (FINAL THEMED VERSION)
import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatInput({ onGenerate, loading }) {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // This frontend validation remains to prevent sending empty requests
    if (!goal.trim()) return; 
    onGenerate(goal);
    setGoal("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        gap: 2,
        // 🛑 CHANGE: Use Deep Teal for border contrast (text.primary)
        borderTop: 1,
        borderColor: "text.primary", 
        p: 2,
        // 🛑 CHANGE: Use Deep Teal for the input container background
        bgcolor: "#2F4F4F", // Deep Teal color from theme
      }}
    >
      <TextField
        placeholder="Describe your goal... (e.g., Produce a movie)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        multiline
        rows={2}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            // 🛑 CHANGE: Input field background to Light Salmon (inherited from theme MuiPaper style)
            // 🛑 CHANGE: Text color will be Deep Teal due to theme.js MuiTextField style
          },
        }}
      />
      <Button
        type="submit"
        disabled={loading} // FIX: Ensures button is always enabled unless loading
        variant="contained"
        color="primary" // Remains GOLD
        endIcon={!loading && <SendIcon />}
        sx={{
          height: 56,
          borderRadius: 3,
          minWidth: 120,
        }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Generate"
        )}
      </Button>
    </Box>
  );
}
