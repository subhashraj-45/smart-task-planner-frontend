// src/pages/Home.jsx (Updated to pass goal/tasks to ChatBubble)
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
      const tasks = data.plan || [];

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Here’s your task plan for "${goal}" 👇`,
          tasks,
          goal: goal, // <--- NEW: Store goal on AI message for copying
        },
      ]);
      toast.success("Plan generated successfully!");
    } catch (err) {
      toast.error("Failed to generate plan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* ... (Paper and Box layout remains the same) */}
      <Paper
        elevation={6}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          border: 1,
          borderColor: "grey.100",
          display: "flex",
          flexDirection: "column",
          maxHeight: 'calc(100vh - 120px)'
        }}
      >
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            overflowY: "auto",
            height: '100%',
            bgcolor: 'grey.50'
          }}
        >
          {chat.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Typography color="text.secondary" textAlign="center" mt={5}>
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
