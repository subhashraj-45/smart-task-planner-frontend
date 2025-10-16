// src/components/TaskCard.jsx 
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkIcon from '@mui/icons-material/Link';

export default function TaskCard({ task, index }) {
  // Use a soft, subtle background color or a thin gold border
  const accentColor = 'primary.light'; // A lighter shade of your Blur Gold

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
        // 🛑 CHANGE: Set the card background to a soft off-white/cream or white
        bgcolor: '#FFFFFF', // Clean White
        border: 1, 
        borderColor: accentColor, // Subtle gold border
        mb: 2, 
        width: '100%', 
        // Optional: Adding a soft box shadow that hints at the gold
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
                  // 🛑 Accent Chips: Use Light Salmon or Blur Gold for dependencies
                  bgcolor: 'lightsalmon', // Use the Light Salmon accent color
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
}// src/components/TaskCard.jsx (REVERTED FOR WHITE BACKGROUND)
import React from "react";
import { Card, CardContent, Typography, Box, Chip, Stack } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkIcon from "@mui/icons-material/Link";

export default function TaskCard({ task, index }) {
  return (
    <Card 
        variant="outlined" 
        sx={{ 
            borderRadius: 2, 
            // 🛑 REVERT: Use light gray background
            bgcolor: "grey.50" 
        }}
    >
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        <Typography variant="subtitle1" fontWeight="600" color="text.primary" mb={1}>
          {index + 1}. {task.task}
        </Typography>

        <Box display="flex" alignItems="center" color="text.secondary" mb={task.depends_on?.length > 0 ? 1 : 0}>
          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2" component="span" fontWeight="500">
            Deadline:
          </Typography>
          <Typography variant="body2" ml={0.5}>
            {task.deadline}
          </Typography>
        </Box>

        {task.depends_on?.length > 0 && (
          <Box mt={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <LinkIcon sx={{ fontSize: 16, color: "grey.500" }} />
              <Typography variant="body2" component="span" fontWeight="500" color="text.secondary">
                Depends on:
              </Typography>
              {task.depends_on.map((dep, i) => (
                <Chip
                  key={i}
                  label={dep}
                  size="small"
                  color="info"
                  variant="outlined"
                  sx={{ borderRadius: 1.5 }}
                />
              ))}
            </Stack>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
