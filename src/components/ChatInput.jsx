// src/components/ChatInput.jsx (FINAL VISIBILITY FIX W/ DARK BACKGROUND)
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
        // 🛑 RESTORE: Dark background and border for floating effect contrast
        borderTop: 1,
        borderColor: "text.primary", 
        p: 2,
        bgcolor: "#2F4F4F", // Deep Teal (Dark Background)
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
            // FIX: Keep white background so text is visible on dark bar
            bgcolor: 'white', 
            color: 'text.primary',
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
