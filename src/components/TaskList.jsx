// src/components/TaskList.jsx (Standard container)
import React from 'react';
import { Box } from '@mui/material';
import TaskCard from './TaskCard';

export default function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) return null;

  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} index={index} />
      ))}
    </Box>
  );
}
