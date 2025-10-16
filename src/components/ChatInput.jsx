// src/components/ChatInput.jsx (ADAPTED FOR IMAGE 2 STYLE)
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
        // 🛑 REMOVE: No dark background for the input bar itself
        // 🛑 REMOVE: No top border, as the Home.jsx wrapper provides it
        // p: 2, // Padding now handled by the wrapper Box in Home.jsx
        // bgcolor: "#2F4F4F", // This background is removed
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
            bgcolor: 'white', 
            color: 'text.primary', // Ensure dark text on white background
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
