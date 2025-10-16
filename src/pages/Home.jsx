// src/pages/Home.jsx (REVERTED TO ORIGINAL CHAT LAYOUT - FINAL FUNCTIONAL)
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

  // The functional handleGenerate remains the same
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
          position: 'relative', // Necessary for floating input bar
          border: 1,
          borderColor: "text.primary", 
          display: "flex",
          flexDirection: "column",
          maxHeight: 'calc(100vh - 120px)',
          // 🛑 REVERT: Main container background to white
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
            // 🛑 REVERT: Chat area background to white
            bgcolor: 'background.paper', 
            // Padding for floating input
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

        <Box
          sx={{
            marginTop: '-60px', 
            zIndex: 10, 
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
