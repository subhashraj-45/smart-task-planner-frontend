// src/pages/Home.jsx (CORRECTED FINAL VERSION)
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

  const handleGenerate = async (goal) => {
    setLoading(true);
    setChat((prev) => [...prev, { sender: "user", text: goal, goal }]);

    try {
      const data = await generatePlan(goal);
      const tasks = (data && data.plan) || (data && data.tasks) || [];

      if (tasks.length === 0) {
        toast.error("Plan generated, but no tasks found.");
        setChat((prev) => [
            ...prev,
            { 
              sender: "ai", 
              text: "I received your request, but I couldn't generate a task list.", 
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
      toast.error("Failed to connect to the server or generate plan.");
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
          position: 'relative', 
          border: 1,
          borderColor: "grey.400", 
          display: "flex",
          flexDirection: "column",
          maxHeight: 'calc(100vh - 120px)',
          
          // Outer Paper (Chat Window Frame) is DARK TEAL/GREEN
          bgcolor: '#2F4F4F', 
          color: 'text.primary', 
        }}
      >
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            overflowY: "auto",
            height: '100%',
            
            // Chat History Area is WHITE
            bgcolor: 'background.paper', 
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
                  borderColor: 'grey.200'
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

        {/* Input bar wrapper area is WHITE */}
        <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: 1, borderColor: 'grey.300' }}>
          <ChatInput onGenerate={handleGenerate} loading={loading} />
        </Box>
      </Paper>
    </Container>
  );
}
