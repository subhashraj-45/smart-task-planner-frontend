// src/pages/Home.jsx (Basic UI)
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
          
          // Using default paper color for the outer frame
          bgcolor: 'background.paper', 
          color: 'text.primary', 
        }}
      >
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            overflowY: "auto",
            height: '100%',
            
            // Using a light color for the chat history area
            bgcolor: 'grey.50', 
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
                  bgcolor: 'white', 
                  border: 1,
                  borderColor: 'grey.300'
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
          {chat.map((msg, i) => (
            <Box key={i}>
              <ChatBubble 
                  sender={msg.sender} 
                  text={msg.text}
                  tasks={msg.tasks}
                  goal={msg.goal}
              >
                {msg.tasks && <TaskList tasks={msg.tasks} />}
              </ChatBubble>
            </Box>
          ))}
        </Box>

        {/* Input bar wrapper area uses default white/light grey */}
        <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: 1, borderColor: 'grey.300' }}>
          <ChatInput onGenerate={handleGenerate} loading={loading} />
        </Box>
      </Paper>
    </Container>
  );
}
