// src/components/ChatBubble.jsx (Basic UI)
import React from "react";
import { motion } from "framer-motion";
import { Paper, Box, Typography, Button } from "@mui/material"; 
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; 
import toast from "react-hot-toast"; 
import { formatPlanForCopy } from "../utils/planUtils"; 

export default function ChatBubble({ sender, text, goal, tasks, children }) {
  const isUser = sender === "user";

  const handleCopy = () => { /* ... */ };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ display: 'flex', width: '100%', justifyContent: isUser ? "flex-end" : "flex-start", marginBottom: 16 }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: "75%",
          p: 2,
          borderRadius: 3,
          ...(isUser
            ? {
                // USER: Default primary color, white text
                bgcolor: "primary.main",
                color: "white",
                borderBottomRightRadius: 0,
              }
            : {
                // AI: Default white background, dark text
                bgcolor: "background.paper", 
                color: "text.primary", 
                border: 1,
                borderColor: "grey.200",
                borderBottomLeftRadius: 0,
              }),
        }}
      >
        {/* ... content remains the same ... */}
      </Paper>
    </motion.div>
  );
}
