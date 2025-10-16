// src/components/ChatInput.jsx (DARK FLOATING INPUT BAR)
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
        borderTop: 1,
        borderColor: "text.primary", 
        p: 2,
        // Restored Deep Teal (Dark) background
        bgcolor: "#2F4F4F", 
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
            // Text field background kept white for contrast
            bgcolor: 'white', 
            color: 'text.primary',
          },
        }}
      />
      <Button
        type="submit"
        disabled={loading}
        variant="contained"
        color="primary" // GOLD color
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
