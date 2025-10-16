// src/pages/Home.jsx (TRANSFORMED TO IMAGE 2 STYLE)
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Paper, Typography, Container } from "@mui/material";
import ChatInput from "../components/ChatInput"; // Will be modified below
// Removed ChatBubble as we are no longer using chat bubbles
import TaskList from "../components/TaskList";
import { generatePlan } from "../api/taskApi"; 
import toast from "react-hot-toast";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null); // To store the latest generated plan
  const [goalText, setGoalText] = useState(""); // To display the goal above tasks

  // The complete, error-handling handleGenerate function (remains functional)
  const handleGenerate = async (goal) => {
    setLoading(true);
    setGoalText(goal); // Save goal to display above tasks

    try {
      const data = await generatePlan(goal);
      
      console.log("Raw API Data:", data); 

      const tasks = (data && data.plan) || (data && data.tasks) || [];

      if (tasks.length === 0) {
        toast.error("Plan generated, but no tasks found in response. Check console for Raw Data.");
        setCurrentPlan(null); // Clear previous plan if empty response
      } else {
        setCurrentPlan(tasks); // Set the plan directly
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
          // 🛑 CHANGE: Entire main Paper background to white
          bgcolor: 'white', 
          color: 'text.primary', 
          display: "flex",
          flexDirection: "column",
          minHeight: 'calc(100vh - 120px)', // Ensure it's tall enough
          position: 'relative', // Needed for ChatInput positioning
          p: 3, // Padding for content
        }}
      >
        {/* Header for Saved Plans, like in Image 2 */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <img src="/path/to/scroll-icon.png" alt="Scroll icon" style={{ height: '32px', marginRight: '8px' }} /> {/* Add an icon like in Image 2 */}
          <Typography variant="h5" fontWeight="bold">Saved Plans</Typography>
        </Box>

        {/* Display the Goal if a plan is present */}
        {currentPlan && currentPlan.length > 0 && (
          <Box mb={3}>
            <Typography variant="h6" fontWeight="medium">
              Goal: {goalText}
            </Typography>
          </Box>
        )}

        {/* Display the TaskList directly */}
        {currentPlan && currentPlan.length > 0 ? (
          <TaskList tasks={currentPlan} />
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography 
              color="text.secondary" 
              textAlign="center" 
              mt={5}
            >
              Describe your goal to get an AI-generated task plan.
            </Typography>
          </motion.div>
        )}

        {/* ChatInput at the bottom */}
        <Box
          sx={{
            position: 'absolute', // 🛑 CHANGE: Position input absolutely at the bottom
            bottom: 0,
            left: 0,
            right: 0,
            p: 2, // Padding for the input box itself
            bgcolor: 'background.paper', // Match main background
            borderTop: 1,
            borderColor: 'grey.300',
            zIndex: 1, // Ensure it's above other content if scrolling happens
          }}
        >
          <ChatInput onGenerate={handleGenerate} loading={loading} />
        </Box>
      </Paper>
    </Container>
  );
}
