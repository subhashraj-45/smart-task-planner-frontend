// src/components/ChatBubble.jsx (Updated for Copy Button)
import React from "react";
import { motion } from "framer-motion";
import { Paper, Box, Typography, Button } from "@mui/material"; // Added Button
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // Added Icon
import toast from "react-hot-toast"; 
import { formatPlanForCopy } from "../utils/planUtils"; // NEW IMPORT

// Accepts goal and tasks props
export default function ChatBubble({ sender, text, goal, tasks, children }) {
  const isUser = sender === "user";

  const handleCopy = () => {
    if (!goal || !tasks) return;
    const planText = formatPlanForCopy(goal, tasks);
    navigator.clipboard.writeText(planText).then(() => {
      toast.success("Task plan copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy:", err);
      toast.error("Could not copy plan.");
    });
  };

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
          // ... (existing styling remains)
          ...(isUser
            ? {
                bgcolor: "primary.main",
                color: "white",
                borderBottomRightRadius: 0,
              }
            : {
                bgcolor: "white",
                color: "text.primary",
                border: 1,
                borderColor: "grey.200",
                borderBottomLeftRadius: 0,
              }),
        }}
      >
        {text && (
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line', lineHeight: 1.5 }}>
            {text}
          </Typography>
        )}
        
        {children}

        {/* NEW COPY BUTTON LOGIC */}
        {!isUser && tasks && tasks.length > 0 && (
          <Box sx={{ mt: 2, borderTop: 1, borderColor: 'grey.100', pt: 1 }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleCopy}
              startIcon={<ContentCopyIcon />}
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