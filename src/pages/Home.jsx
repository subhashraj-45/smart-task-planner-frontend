// src/pages/Home.jsx (FINAL FLOATING INPUT VERSION)
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

  // The complete, error-handling handleGenerate function (Functional logic remains)
  const handleGenerate = async (goal) => {
    setLoading(true);
    setChat((prev) => [...prev, { sender: "user", text: goal, goal }]);

    try {
      const data = await generatePlan(goal);
      
      console.log("Raw API Data:", data); 

      const tasks = (data && data.plan) || (data && data.tasks) || [];

      if (tasks.length === 0) {
        toast.error("Plan generated, but no tasks found in response. Check console for Raw Data.");
        
        setChat((prev) => [
            ...prev,
            { 
              sender: "ai", 
              text: "I received your request, but I couldn't generate a task list. Please try a different goal.", 
              tasks: [],
            },
        ]);
        
      } else {
        setChat((prev) => [
          ...prev,
          {
            sender: "ai",
            text: `Here’s your task plan for "${goal}" 👇`,
            tasks,
            goal: goal,
          },
        ]);
        toast.success("Plan generated successfully!");
      }
    } catch (err) {
      toast.error("Failed to connect to the server or generate plan. See console for error details.");
      console.error("API Generation Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={6}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          // 🛑 FIX 1: Set position to relative for proper layering
          position: 'relative', 
          border: 1,
          borderColor: "text.primary", 
          display: "flex",
          flexDirection: "column",
          maxHeight: 'calc(100vh - 120px)',
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
            bgcolor: 'background.paper', 
            // 🛑 FIX 2: Add padding to prevent chat content from hiding under the floating input
            paddingBottom: '100px', 
          }}
        >
          {chat.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Typography 
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
                  tasks={msg.tasks}
                  goal={msg.goal}
              >
                {msg.tasks && <TaskList tasks={msg.tasks} />}
              </ChatBubble>
            </Box>
          ))}
        </Box>

        {/* 🛑 FIX 3: Wrap ChatInput in a Box and use negative margin to make it float */}
        <Box
          sx={{
            // Negative margin pulls the component up and over the chat area
            marginTop: '-60px', 
            zIndex: 10, 
            // Position it at the bottom of the Paper element
            alignSelf: 'flex-end',
            width: '100%'
          }}
        >
          <ChatInput onGenerate={handleGenerate} loading={loading} />
        </Box>
        
      </Paper>
    </Container>
  );
}
