
# 🧠 Smart Task Planner - Client Application
This repository contains the single-page application (SPA) built with React/Vite. It serves as the user interface for submitting goals and displaying the AI-generated plans.

🔗 Project Status & Cross-Reference
Component	Status	URL
Client App	LIVE (Vercel)	https://smart-task-planner-frontend.vercel.app/
Backend API	LIVE (Render)	[INSERT YOUR RENDER API URL HERE]

Export to Sheets
🚀 Scope and Deliverables
The frontend's role is to provide the input mechanism for the goal text and render the structured output (task breakdown, dependencies, estimated timelines).


Input: Text field for the user's goal.

Output: Structured UI display of the JSON response from the API.

🛠️ Technical Stack
Framework: React (Vite)

State Management: (Mention if you used Redux, Zustand, or simple React Hooks)

Styling: (Mention if you used Tailwind CSS, Styled Components, etc.)

Deployment: Vercel

⚙️ API Consumption
The application fetches and posts data to the external Render API via the following environment variable:

Variable	Value	Usage
VITE_API_BASE	[Your Render API URL]	Used by the client to construct API calls (e.g., ${VITE_API_BASE}/generate-plan).

Export to Sheets
🖥️ Local Setup (Frontend)
Clone the repository.

Install dependencies: npm install

Create a local environment file: Create a file named .env in the root of the repository.

Populate .env:

Bash

# Frontend/.env
# Points the local client to your live Render Backend API
VITE_API_BASE=https://smart-task-planner-api.onrender.com 
Run the application: npm run dev (Runs on http://localhost:5173 or similar port)

# Link for Backend Repository
https://github.com/subhashraj-45/smart-task-planner-backend
