import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import RoleSelect from "./pages/RoleSelect";
import Dashboard from "./pages/CitizenDashboard"; // Citizen dashboard (already built)
import GovernmentDashboard from "./pages/GovernmentDashboard";
import GovernmentLogin from "./pages/GovernmentLogin";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Role Selection */}
        <Route path="/role" element={<RoleSelect />} />

        {/* Citizen Dashboard (FIRST CREATED PAGE) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Government Flow */}
        <Route path="/gov-login" element={<GovernmentLogin />} />
        <Route path="/gov-dashboard" element={<GovernmentDashboard />} />

      </Routes>
    </Router>
  );
}
