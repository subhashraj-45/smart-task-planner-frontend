// src/pages/Home.jsx (FINAL STYLING WITH SALMON BACKGROUND FIX)
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Paper, Typography, Container } from "@mui/material";
import ChatInput from "../components/ChatInput";
import ChatBubble from "../components/ChatBubble";
import TaskList from "../components/TaskList";
import { generatePlan } from "../api/taskApi";
import toast from "react-hot-toast";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);

  const handleGenerate = async (goal) => { /* ... (function body remains the same) ... */ };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={6}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          // 1. BORDER COLOR: Use Deep Teal
          border: 1,
          borderColor: "text.primary", 
          display: "flex",
          flexDirection: "column",
          maxHeight: 'calc(100vh - 120px)',
          // 🛑 FIX: Use Light Salmon hex code directly
          bgcolor: '#D4A4B1', 
          // Set default text color to Deep Teal
          color: 'text.primary', 
        }}
      >
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            overflowY: "auto",
            height: '100%',
            // 🛑 FIX: Use Light Salmon hex code directly
            bgcolor: '#D4A4B1', 
          }}
        >
          {chat.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Typography 
                // GREETING TEXT COLOR: Set to Deep Teal
                color="text.primary" 
                textAlign="center" 
                mt={5}
              >
                Describe your Task.
              </Typography>
            </motion.div>
          )}

          {chat.map((msg, i) => (
            <Box key={i}>
              <ChatBubble 
                  sender={msg.sender} 
                  text={msg.text}
                  tasks={msg.tasks} // Passed to ChatBubble
                  goal={msg.goal} // Passed to ChatBubble for copy logic
              >
                {msg.tasks && <TaskList tasks={msg.tasks} />}
              </ChatBubble>
            </Box>
          ))}
        </Box>

        <ChatInput onGenerate={handleGenerate} loading={loading} />
      </Paper>
    </Container>
  );
}
