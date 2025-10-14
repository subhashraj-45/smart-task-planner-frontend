const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";

export async function generatePlan(goal) {
  const res = await fetch(`${API_BASE}/generate-plan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ goal }),
  });
  if (!res.ok) throw new Error("Failed to generate plan");
  return res.json();
}

export async function getPlans() {
  const res = await fetch(`${API_BASE}/plans`);
  if (!res.ok) throw new Error("Failed to fetch plans");
  return res.json();
}
