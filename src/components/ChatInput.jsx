// src/components/ChatInput.jsx (FINAL WHITE INPUT BAR BACKGROUND)
import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatInput({ onGenerate, loading }) {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        // 🛑 CHANGE: Remove dark background and border
        borderTop: 'none', 
        p: 2,
        bgcolor: 'white', // Set the outer input bar background to WHITE
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
            // Input box itself is WHITE
            bgcolor: 'white', 
            // Text is GOLD
            color: 'primary.main', 
            fontWeight: 'bold' 
          },
          // Placeholder color remains
          "& .MuiInputBase-input::placeholder": {
            color: 'text.secondary', 
            opacity: 1,
          },
        }}
      />
      <Button
        type="submit"
        disabled={loading}
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
