# smart-travel-dashboard
<img width="626" height="609" alt="Screenshot (283)" src="https://github.com/user-attachments/assets/3d32ea05-d23a-4d9b-8fc2-69778192e4fc" />



A high-performance, full-stack travel planning application built with the MERN stack. This dashboard allows users to organize their upcoming trips with persistent data storage and real-time budget tracking.

## Core Features
Data Persistence: Uses MongoDB to ensure your trip data is saved permanently.

Dynamic Budgeting: Automatically calculates and displays the total budget for all planned trips.

Modern Tech Stack: Developed with Vite for a 10x faster development experience than standard React apps.

Responsive Design: Clean, card-based UI that organizes trip details (Destination, Date, and Cost) clearly.

## Tech stack
*Frontend*	React.js (Vite), Axios, CSS3
*Backend*	Node.js, Express.js
*Database*	MongoDB (Native Driver)

## Installation & Setup
1. Backend Configuration
Navigate to the backend directory and install the necessary modules:

```Bash
cd backend
npm install
```
Ensure you have MongoDB running on your machine, then start the server:

```Bash
node server.js
```

## 2. Frontend Configuration
Navigate to the frontend directory and install the dependencies:

```Bash
cd frontend
npm install
```
Start the development server:

```Bash
npm run dev
```

## API Endpoints
GET /api/trips - Fetches all saved trips from MongoDB.

POST /api/trips - Saves a new trip to the database.
