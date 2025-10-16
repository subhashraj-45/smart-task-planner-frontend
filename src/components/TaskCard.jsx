// src/components/TaskCard.jsx (FINAL THEMED VERSION)
import React from "react";
import { Card, CardContent, Typography, Box, Chip, Stack } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkIcon from "@mui/icons-material/Link";

// Define the hex codes for clarity, although 'text.primary' should work for Deep Teal
const deepTeal = '#2F4F4F';
const lightSalmon = '#D4A4B1';

export default function TaskCard({ task, index }) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        // 🛑 FIX 1: Set background to Light Salmon for contrast against Deep Teal bubble
        bgcolor: lightSalmon, 
        // 🛑 FIX 2: Set the border to Deep Teal
        borderColor: deepTeal,
        borderWidth: '2px' 
      }}
    >
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        <Typography 
          variant="subtitle1" 
          fontWeight="600" 
          // 🛑 FIX 3: Ensure the title text is Deep Teal
          color={deepTeal} 
          mb={1}
        >
          {index + 1}. {task.task}
        </Typography>

        {/* Deadline information */}
        <Box 
          display="flex" 
          alignItems="center" 
          // 🛑 FIX 4: Ensure all associated text/icons are Deep Teal
          color={deepTeal} 
          mb={task.depends_on?.length > 0 ? 1 : 0}
        >
          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2" component="span" fontWeight="500">
            Deadline:
          </Typography>
          <Typography variant="body2" ml={0.5}>
            {task.deadline}
          </Typography>
        </Box>

        {/* Dependency chips */}
        {task.depends_on?.length > 0 && (
          <Box mt={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              {/* Link icon and "Depends on" text */}
              <LinkIcon sx={{ fontSize: 16, color: deepTeal }} />
              <Typography variant="body2" component="span" fontWeight="500" color={deepTeal}>
                Depends on:
              </Typography>
              {/* Dependency Chips */}
              {task.depends_on.map((dep, i) => (
                <Chip
                  key={i}
                  label={dep}
                  size="small"
                  // 🛑 FIX 5: Use Salmon/Deep Teal colors for the Chip for consistency
                  sx={{ 
                    borderRadius: 1.5,
                    bgcolor: lightSalmon, // Salmon background
                    color: deepTeal, // Deep Teal text
                    border: '1px solid ' + deepTeal, // Deep Teal border
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
