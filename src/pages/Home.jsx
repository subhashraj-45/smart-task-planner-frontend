// src/pages/Home.jsx (Refined to match the latest image)
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

  const handleGenerate = async (goal) => { /* ... existing logic ... */ };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={6}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: 'relative', 
          border: 1,
          borderColor: "grey.400", 
          display: "flex",
          flexDirection: "column",
          maxHeight: 'calc(100vh - 120px)',
          
          // Outer Paper (Chat Window Frame) remains DARK TEAL/GREEN
          bgcolor: '#FFFFFF', 
          color: 'text.primary', 
        }}
      >
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            overflowY: "auto",
            height: '100%',
            
            // 🛑 CHANGE 1: Inner Chat History Area now LIGHT GREY/OFF-WHITE
            bgcolor: '#F5F5F5', // Light grey for the chat history background
            paddingBottom: 3, 
          }}
        >
          {chat.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Paper
                elevation={4}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  maxWidth: "70%",
                  mx: 'auto', 
                  // 🛑 CHANGE 2: Greeting bubble also LIGHT GREY/OFF-WHITE to match container
                  bgcolor: '#F5F5F5', // Light grey for the greeting bubble
                  border: 1,
                  borderColor: 'grey.300' // Slightly darker border for contrast
                }}
              >
                <Typography 
                  color="text.primary" 
                  textAlign="center" 
                >
                  👋 Hi there! Describe your goal to get an AI-generated task plan.
                </Typography>
              </Paper>
            </motion.div>
          )}
          {/* Chat bubbles will appear here */}
        </Box>

        {/* 🛑 CHANGE 3: Input bar wrapper area is now DARK TEAL/GREEN */}
        <Box sx={{ p: 2, bgcolor: '#2F4F4F', borderTop: 1, borderColor: 'grey.300' }}>
          <ChatInput onGenerate={handleGenerate} loading={loading} />
        </Box>
      </Paper>
    </Container>
  );
}
