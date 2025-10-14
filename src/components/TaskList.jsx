// src/components/TaskList.jsx (MUI Version)
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TaskCard from "./TaskCard";
import { Box, Typography, Grid } from "@mui/material";

export default function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0)
    return (
      <Typography variant="body2" color="text.secondary" fontStyle="italic" mt={1}>
        No tasks yet
      </Typography>
    );

  return (
    <Box mt={2}>
      <AnimatePresence>
        <Grid container spacing={2}>
          {tasks.map((task, i) => (
            <Grid item xs={12} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <TaskCard task={task} index={i} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </AnimatePresence>
    </Box>
  );
}