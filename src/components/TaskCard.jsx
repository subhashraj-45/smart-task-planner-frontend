// src/components/TaskCard.jsx (Ensure this is the current code)
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
// ... imports

export default function TaskCard({ task, index }) {
  // 🛑 CRITICAL FIX 1: Define a variable to capture the task title, checking both possible keys
  const taskTitle = task.title || task.task; 
  
  // Define dependencies variable for robustness (from yesterday's fix)
  const taskDependencies = task.dependsOn || task.depends_on; 

  const accentColor = 'primary.light'; 

  return (
    <Paper
      // ... (sx styles remain the same) ...
    >
      <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'text.primary', mb: 1 }}>
        {index + 1}. {**taskTitle**} // 🛑 CRITICAL FIX 2: Use the robust variable here
      </Typography>

      {task.deadline && (
        <Box display="flex" alignItems="center" sx={{ color: 'grey.600', fontSize: '0.85rem', mb: 0.5 }}>
          <AccessTimeIcon sx={{ fontSize: '1rem', mr: 0.5, color: 'text.secondary' }} />
          Deadline: {task.deadline}
        </Box>
      )}

      {taskDependencies && taskDependencies.length > 0 && (
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" display="block" sx={{ color: 'text.secondary', mb: 0.5 }}>
            <LinkIcon sx={{ fontSize: '0.85rem', mr: 0.5 }} />
            Depends on:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={0.5}>
            {taskDependencies.map((dep, depIndex) => (
              // ... (dependency chip styling) ...
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
}
