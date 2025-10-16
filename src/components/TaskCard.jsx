// src/components/TaskCard.jsx (FINAL STYLING - FIXING BUILD ERROR)
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkIcon from '@mui/icons-material/Link';

// 🛑 KEEP ONLY THIS SINGLE DEFAULT EXPORT 🛑
export default function TaskCard({ task, index }) {
  // Assuming 'primary.light' is a lighter shade of your Blur Gold
  const accentColor = 'primary.light'; 

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
        // Card background is Clean White, matching the inner chat area
        bgcolor: '#FFFFFF', 
        border: 1, 
        borderColor: accentColor, // Subtle gold border
        mb: 2, 
        width: '100%', 
        // Soft box shadow hinting at the gold color
        boxShadow: `0px 2px 5px 0px rgba(184, 134, 11, 0.1)`, 
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'text.primary', mb: 1 }}>
        {index + 1}. {task.title}
      </Typography>

      {task.deadline && (
        <Box display="flex" alignItems="center" sx={{ color: 'grey.600', fontSize: '0.85rem', mb: 0.5 }}>
          <AccessTimeIcon sx={{ fontSize: '1rem', mr: 0.5, color: 'text.secondary' }} />
          Deadline: {task.deadline}
        </Box>
      )}

      {task.dependsOn && task.dependsOn.length > 0 && (
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" display="block" sx={{ color: 'text.secondary', mb: 0.5 }}>
            <LinkIcon sx={{ fontSize: '0.85rem', mr: 0.5 }} />
            Depends on:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={0.5}>
            {task.dependsOn.map((dep, depIndex) => (
              <Box
                key={depIndex}
                sx={{
                  // Accent Chips: Use Light Salmon accent color
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
