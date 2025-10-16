// src/components/TaskCard.jsx (Final Styling with Data Fixes)
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkIcon from '@mui/icons-material/Link';

export default function TaskCard({ task, index }) {
  // 🛑 CRITICAL FIX: Robust data mapping for the task title and dependencies
  // Checks for 'title' (if API changed) or falls back to your old key 'task'
  const taskTitle = task.title || task.task; 
  // Checks for 'dependsOn' (if API changed) or falls back to your old key 'depends_on'
  const taskDependencies = task.dependsOn || task.depends_on; 

  const accentColor = 'primary.light'; // Subtle gold accent

  return (
    <Paper // Switched back to Paper for the desired white/bordered look
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
        // Card background is Clean White
        bgcolor: '#FFFFFF', 
        border: 1, 
        borderColor: accentColor, // Subtle gold border
        mb: 2, 
        width: '100%', 
        boxShadow: `0px 2px 5px 0px rgba(184, 134, 11, 0.1)`, 
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'text.primary', mb: 1 }}>
        {index + 1}. {**taskTitle**} // Uses the robust variable to show full title
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
              <Box
                key={depIndex}
                sx={{
                  bgcolor: 'lightsalmon', 
                  color: 'white', 
                  borderRadius: 1,
                  px: 1,
                  py: 0.25,
                  fontSize: '0.75rem',
                  fontWeight: 'medium',
                }}
              >
                {dep}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
}
