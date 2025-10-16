// src/pages/Home.jsx (FINAL FUNCTIONAL AND STYLING FIX)
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

  // The complete, error-handling handleGenerate function
  const handleGenerate = async (goal) => {
    setLoading(true);
    setChat((prev) => [...prev, { sender: "user", text: goal, goal }]);

    try {
      const data = await generatePlan(goal);
      
      console.log("Raw API Data:", data); 

      // Safely extract tasks (handles common API response structures: .plan or .tasks)
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
          border: 1,
          borderColor: "text.primary", 
          display: "flex",
          flexDirection: "column",
          maxHeight: 'calc(100vh - 120px)',
          // 🛑 REVERT: Use background.paper (which is often white) for the chatbox
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
            // 🛑 REVERT: Use background.paper for the chat area
            bgcolor: 'background.paper', 
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

        <ChatInput onGenerate={handleGenerate} loading={loading} />
      </Paper>
    </Container>
  );
}
