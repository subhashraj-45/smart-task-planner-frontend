// src/pages/History.jsx (MUI Version)
import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Container, Divider } from "@mui/material";
import TaskList from "../components/TaskList";
import { getPlans } from "../api/taskApi";

export default function History() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPlans();
        setPlans(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={4} sx={{ borderRadius: 4, p: 4, bgcolor: "white" }}>
        <Typography variant="h4" fontWeight="600" color="text.primary" mb={3}>
          📜 Saved Plans
        </Typography>

        {plans.length === 0 ? (
          <Typography color="text.secondary" textAlign="center" fontStyle="italic" py={5}>
            No saved plans yet.
          </Typography>
        ) : (
          plans.map((plan, i) => (
            <Box key={i} mb={4}>
              <Typography variant="h6" fontWeight="600" color="text.secondary" mb={1}>
                Goal: {plan.goal}
              </Typography>
              <TaskList tasks={plan.plan} />
              {i < plans.length - 1 && <Divider sx={{ my: 3 }} />}
            </Box>
          ))
        )}
      </Paper>
    </Container>
  );
}