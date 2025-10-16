// src/components/ChatBubble.jsx (FINAL THEMED VERSION)
import React from "react";
import { motion } from "framer-motion";
import { Paper, Box, Typography, Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import toast from "react-hot-toast"; 
import { formatPlanForCopy } from "../utils/planUtils";

// Accepts goal and tasks props
export default function ChatBubble({ sender, text, goal, tasks, children }) {
  const isUser = sender === "user";

  const handleCopy = () => { /* ... remains the same ... */ };

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
                // 🛑 USER BUBBLE: Gold background, white text
                bgcolor: "primary.main",
                color: "white", 
                borderBottomRightRadius: 0,
              }
            : {
                // 🛑 AI BUBBLE: Deep Teal background, light text (Salmon/white)
                bgcolor: "#2F4F4F", // Deep Teal color
                color: "secondary.main", // Light Salmon/Pink text for contrast
                borderBottomLeftRadius: 0,
                // Remove the extra border logic, as the Teal background provides contrast
              }),
        }}
      >
        {text && (
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line', lineHeight: 1.5 }}>
            {text}
          </Typography>
        )}
        
        {/* This is where the TaskList (children) is rendered */}
        {children} 

        {/* NEW COPY BUTTON LOGIC */}
        {!isUser && tasks && tasks.length > 0 && (
          <Box sx={{ mt: 2, borderTop: 1, borderColor: 'secondary.main', pt: 1 }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleCopy}
              startIcon={<ContentCopyIcon />}
              // The button uses the default primary/gold color here
              sx={{ textTransform: 'none', borderRadius: 2 }} 
            >
              Copy Plan
            </Button>
          </Box>
        )}
      </Paper>
    </motion.div>
  );
}
