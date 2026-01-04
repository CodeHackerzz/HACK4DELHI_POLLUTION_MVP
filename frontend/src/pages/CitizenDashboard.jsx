import { useEffect, useState } from "react";
import CityMap from "../components/CityMap";

/* ================= AQI SEVERITY ENGINE ================= */

function getAQIMeta(aqi) {
  if (aqi <= 50) return { label: "GOOD", glow: "from-green-400 to-green-600" };
  if (aqi <= 100) return { label: "SATISFACTORY", glow: "from-emerald-400 to-emerald-600" };
  if (aqi <= 200) return { label: "MODERATE", glow: "from-yellow-400 to-orange-400" };
  if (aqi <= 300) return { label: "POOR", glow: "from-orange-500 to-red-500" };
  if (aqi <= 400) return { label: "VERY POOR", glow: "from-red-600 to-red-800" };
  return { label: "SEVERE", glow: "from-red-900 to-black" };
}

/* ================= POLICY ENGINE ================= */

function generatePolicy(pollution) {
  const policies = [];

  if (pollution.pm25 > 120) {
    policies.push({
      level: "WARNING",
      title: "Restrict Construction Activities",
      action: "Suspend non-essential construction work",
      authority: "Municipal Corporation",
      reason: "PM2.5 concentration crossed safe limit",
    });
  }

  if (pollution.pm10 > 150) {
    policies.push({
      level: "WARNING",
      title: "Enforce Road Dust Control",
      action: "Deploy water sprinklers & mechanical sweeping",
      authority: "Urban Transport Department",
      reason: "Rising PM10 dust emissions",
    });
  }

  if (pollution.aqi > 200) {
    policies.push({
      level: "CRITICAL",
      title: "Public Health Advisory",
      action: "Issue advisory for children & elderly",
      authority: "Health Department",
      reason: "AQI reached unhealthy levels",
    });
  }

  if (policies.length === 0) {
    policies.push({
      level: "NORMAL",
      title: "Air Quality Stable",
      action: "Continue routine monitoring",
      authority: "Pollution Control Board",
      reason: "All parameters within acceptable range",
    });
  }

  return policies;
}

/* ================= PRIORITY ZONES ================= */

const priorityZones = [
  { ward: 17, area: "Rohini Sec-16", aqi: 328 },
  { ward: 26, area: "Pitampura", aqi: 320 },
  { ward: 29, area: "Janakpuri", aqi: 318 },
];

/* ================= CITIZEN ADVISORY ================= */

function getCitizenAdvisory(ward) {
  if (!ward) return [];

  const advice = [];

  if (ward.aqi > 200) {
    advice.push("Avoid outdoor activities");
    advice.push("Children & elderly should stay indoors");
  }

  if (ward.pm25 > 120) {
    advice.push("Wear N95 mask when outdoors");
  }

  if (ward.pm10 > 150) {
    advice.push("Wash face and hands frequently");
  }

  return advice;
}

/* ================= DASHBOARD ================= */

export default function Dashboard() {
  const [pollution, setPollution] = useState({
    city: "Delhi",
    pm25: 0,
    pm10: 0,
    no2: 0,
    aqi: 0,
  });

  const [lastUpdated, setLastUpdated] = useState("");
  const [selectedWard, setSelectedWard] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/pollution/live?city=Delhi")
      .then((res) => res.json())
      .then((data) => {
        const aqi = Math.round((data.pm25 + data.pm10) / 2);

        setPollution({
          city: data.city,
          pm25: data.pm25,
          pm10: data.pm10,
          no2: data.no2,
          aqi,
        });

        setLastUpdated(new Date().toLocaleString());
      })
      .catch(console.error);
  }, []);

  const policies = generatePolicy(pollution);
  const aqiMeta = getAQIMeta(pollution.aqi);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white px-10 py-12">

      {/* HEADER */}
      <div className="mb-16">
        <p className="text-emerald-400 tracking-widest mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          LIVE CITY MONITORING
        </p>

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Ward-Wise Pollution Command Center
        </h1>

        <p className="text-slate-400 mt-4">
          Digital Twin • AQICN Real Data • Policy Intelligence
        </p>

        <p className="text-xs text-slate-500 mt-2">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        <MetricCard title="AQI-Air Quality Index" value={pollution.aqi} unit="" status={aqiMeta.label} glow={aqiMeta.glow} />
        <MetricCard title="PM2.5-Particulate Matter smaller than 2.5" value={pollution.pm25} unit="µg/m³" status="LIVE" glow="from-yellow-400 to-orange-500" />
        <MetricCard title="PM10-Particles smaller than 10 micrometers" value={pollution.pm10} unit="µg/m³" status="LIVE" glow="from-orange-500 to-red-500" />
        <MetricCard title="NO₂-Nitrogen Dioxide" value={pollution.no2} unit="ppb" status="LIVE" glow="from-cyan-400 to-blue-500" />
      </div>

      {/* PANELS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* MAP PANEL */}
        <div className="md:col-span-2 rounded-3xl bg-slate-900/60 backdrop-blur-xl p-8 border border-slate-700">
          <h2 className="text-xl font-semibold text-emerald-400 mb-2">
            🗺️ City Digital Twin
          </h2>

          <p className="text-slate-400 mb-6">
            Ward-level pollution visualization
          </p>

          <div className="h-[420px] rounded-2xl overflow-hidden border border-slate-700">
            <CityMap onWardSelect={setSelectedWard} />
          </div>

          {/* ✅ ONLY NEW ADDITION */}
          {selectedWard && (
            <div className="mt-6 bg-slate-900/60 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                👥 Citizen Advisory — Ward {selectedWard.ward}
              </h3>

              <ul className="space-y-2 text-slate-300">
                {getCitizenAdvisory(selectedWard).map((tip, i) => (
                  <li key={i}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* POLICY INTELLIGENCE — UNCHANGED */}
        <div className="rounded-3xl bg-slate-900/60 backdrop-blur-xl p-8 border border-slate-700 flex flex-col">
          <h2 className="text-xl font-semibold text-cyan-400 mb-6">
            🚨 Policy Intelligence
          </h2>

          <div className="space-y-6 overflow-y-auto pr-2" style={{ maxHeight: "520px" }}>
            {policies.map((p, i) => (
              <div key={i} className="relative bg-slate-800 rounded-2xl border border-slate-700 p-6">
                <div className={`absolute left-0 top-0 h-full w-1 ${
                  p.level === "CRITICAL" ? "bg-red-600" :
                  p.level === "WARNING" ? "bg-yellow-400" : "bg-green-500"
                }`} />

                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10">{p.level}</span>
                </div>

                <div className="text-sm text-slate-300 space-y-2">
                  <p>🛠 <b>Action:</b> {p.action}</p>
                  <p>🏛 <b>Authority:</b> {p.authority}</p>
                  <p className="text-xs text-slate-400">
                    Triggered because {p.reason}
                  </p>
                </div>
              </div>
            ))}

            {/* ✅ PRIORITY ZONES — BACK IN POLICY PANEL */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                🚨 Today’s Priority Zones
              </h3>

              <div className="space-y-3">
                {priorityZones.map((z, i) => (
                  <div key={i} className="flex justify-between items-center bg-slate-900/60 rounded-xl p-3 border border-slate-700">
                    <div>
                      <p className="text-white font-medium">{z.area}</p>
                      <p className="text-xs text-slate-400">Ward {z.ward}</p>
                    </div>
                    <span className="text-sm font-semibold text-red-400">
                      AQI {z.aqi}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= KPI CARD ================= */

function MetricCard({ title, value, unit, status, glow }) {
  return (
    <div className={`relative rounded-3xl p-[2px] bg-gradient-to-r ${glow}`}>
      <div className="rounded-3xl bg-slate-900/80 backdrop-blur-xl p-6 h-full">
        <div className="flex justify-between items-center mb-6">
          <p className="text-slate-400">{title}</p>
          <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">
            {status}
          </span>
        </div>

        <div className="text-5xl font-bold text-white">
          {value}
          <span className="text-xl text-slate-400 ml-2">{unit}</span>
        </div>
      </div>
    </div>
  );
}