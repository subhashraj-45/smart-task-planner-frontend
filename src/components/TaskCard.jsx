// src/components/TaskCard.jsx (REVERTED FOR WHITE BACKGROUND)
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
