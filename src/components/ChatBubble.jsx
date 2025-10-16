// src/components/ChatBubble.jsx (RESTORED GOLD/WHITE BUBBLE STYLING)
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
                // 🛑 RESTORE USER: Gold background, white text, aligns right
                bgcolor: "primary.main",
                color: "white",
                borderBottomRightRadius: 0,
              }
            : {
                // AI: White background, dark text, aligns left
                bgcolor: "white", 
                color: "text.primary", 
                border: 1,
                borderColor: "grey.200",
                borderBottomLeftRadius: 0,
              }),
        }}
      >
        {/* ... text and children display logic remains the same ... */}
        {text && (
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line', lineHeight: 1.5 }}>
            {text}
          </Typography>
        )}
        
        {children}

        {/* COPY BUTTON LOGIC (remains the same) */}
      </Paper>
    </motion.div>
  );
}
