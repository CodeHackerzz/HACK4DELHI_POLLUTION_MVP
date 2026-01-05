Ward-Wise Pollution Command Center

Digital Twin for Urban Air Quality
A role-based, real-time pollution monitoring platform that empowers citizens with health awareness and governments with ward-level intelligence to take timely, data-driven action.

🚨 Problem Statement

Urban air pollution is a silent crisis.
Citizens do not know how polluted their exact locality (ward) is, and governments often react after pollution levels become critical due to lack of granular, real-time insights.

Existing systems:

Show city-level averages (not ward-level)
Are hard to understand for common citizens
Do not support proactive governance decisions

💡 Our Solution

The Ward-Wise Pollution Command Center acts as a software-only digital twin of a city’s air quality system.
It uses real-time OpenAQ data, geospatial mapping, and analytics to:
Visualize pollution at ward level
Detect pollution hotspots
Provide smart alerts & advisories
Enable role-based dashboards for Citizens and Government officials

👥 User Roles
🧍 Citizen (No Login Required)

View live AQI of their ward
Receive health advisories
Get alerts when pollution rises
Understand pollution in simple visuals

🏛️ Government (Login Required)

Monitor ward-wise pollution in real time
Identify critical hotspots
Track trends and escalation
Take preventive and policy actions

✨ Key Features

🌐 Real-Time Ward AQI (PM2.5, PM10, NO₂)
🗺️ Ward-Level Digital Twin Visualization
🔥 Pollution Hotspot Detection
🔔 Smart Alerts & Advisories
🧠 Policy Intelligence Dashboard
🎭 Role-Based Access (Citizen / Government)
💻 Modern, Animated UI (Command Center Style)

🛠️ Tech Stack
Frontend

React (Vite)
Tailwind CSS
Animated, glassmorphism UI

Backend

Python – FastAPI
SQLAlchemy
PostgreSQL + PostGIS
Data
OpenAQ (Real-Time Air Quality Data)

🧪 MVP Scope

✔ Live pollution data fetched from OpenAQ
✔ Backend API (/pollution/live?city=Delhi)
✔ Frontend dashboard consuming live API
✔ Ward-wise visual simulation
✔ Citizen & Government dashboards

🌱 Impact
Social
Improves public health awareness
Helps vulnerable groups avoid exposure

Technical
Software-only digital twin (no IoT cost)
Scalable to any city

Economic
Low deployment cost
Preventive action reduces healthcare burden

🎯 SDG Alignment

SDG 3 – Good Health & Well-Being
SDG 11 – Sustainable Cities
SDG 13 – Climate Action

🚀 Future Scope

Predictive pollution forecasting
AI-based action recommendations
Google Maps ward overlays
Mobile app notifications
Integration with traffic & weather data
Policy simulation (“What-if” analysis)

▶️ How to Run
Backend
cd backend
uvicorn app.main:app --reload

Frontend
cd frontend
npm install
npm run dev

📌 Conclusion
The Ward-Wise Pollution Command Center bridges the gap between data and action.
It transforms raw pollution data into clear intelligence, protecting citizens today and enabling smarter governance for tomorrow.
