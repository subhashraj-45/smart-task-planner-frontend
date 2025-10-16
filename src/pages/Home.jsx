// src/pages/Home.jsx (FINAL STYLING WITH SALMON BACKGROUND)
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
          // 🛑 1. BORDER COLOR: Use Deep Teal for contrast (from theme.js text.primary)
          border: 1,
          borderColor: "text.primary", 
          display: "flex",
          flexDirection: "column",
          maxHeight: 'calc(100vh - 120px)',
          // 🛑 2. BACKGROUND COLOR: Set to Light Salmon (from theme.js background.paper)
          bgcolor: 'background.paper', 
          // Set default text color inside Paper to Deep Teal
          color: 'text.primary', 
        }}
      >
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            overflowY: "auto",
            height: '100%',
            // 🛑 3. CHAT AREA BACKGROUND: Set to Light Salmon
            bgcolor: 'background.paper', 
          }}
        >
          {chat.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Typography 
                // 🛑 4. GREETING TEXT COLOR: Set to Deep Teal
                color="text.primary" 
                textAlign="center" 
                mt={5}
              >
                👋 Hi there! Describe your goal to get an AI-generated task plan.
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
