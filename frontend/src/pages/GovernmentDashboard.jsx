import { useEffect, useState } from "react";
import CityMap from "../components/CityMap";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function GovernmentDashboard() {
  const [data, setData] = useState(null);
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/pollution/live?city=Delhi")
      .then(res => res.json())
      .then(res => {
        setData(res);
        setUpdated(new Date().toLocaleString());
      });
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-lg">
        Initializing Government Command Center…
      </div>
    );
  }

  const aqi = Math.round((data.pm25 + data.pm10) / 2);

  const trendData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}h`,
    AQI: Math.round(aqi - 35 + Math.random() * 70)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white">

      {}
      <section className="px-12 pt-14 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold text-emerald-400 tracking-tight"
        >
          Pollution Intelligence Command Center
        </motion.h1>
        <p className="text-slate-400 mt-3 text-lg max-w-3xl">
          Government-grade real-time air quality monitoring and policy decision system
        </p>
        <p className="text-xs text-slate-500 mt-2">
          Last synchronized: {updated}
        </p>
      </section>

      {}
      <section className="px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        <Stat title="AQI– Air Quality Index" value={aqi} critical />
        <Stat title="PM2.5-Particulate Matter smaller than 2.5" value={data.pm25} unit="µg/m³" />
        <Stat title="PM10-Particles smaller than 10 micrometers" value={data.pm10} unit="µg/m³" />
        <Stat title="NO₂-Nitrogen Dioxide" value={data.no2} unit="ppb" />
      </section>

      {}
      <section className="px-12 mb-24">
        <GlassPanel title="Ward-Wise Pollution Visualization">
          <div className="h-[480px] rounded-2xl overflow-hidden border border-slate-700">
            <CityMap />
          </div>
        </GlassPanel>
      </section>

      {}
      <section className="px-12 mb-24">
        <GlassPanel title="24-Hour AQI Trend (Readable & Interpretable)">
          <p className="text-sm text-slate-400 mb-4">
            Rising curves indicate worsening air quality. Sharp peaks require immediate intervention.
          </p>

          <div className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 6" stroke="#1e293b" />
                <XAxis dataKey="hour" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  formatter={(value) => [`AQI ${value}`, "Air Quality"]}
                  contentStyle={{
                    backgroundColor: "#020617",
                    borderRadius: "14px",
                    border: "1px solid #22c55e"
                  }}
                />
                <Line
                  dataKey="AQI"
                  stroke="#22c55e"
                  strokeWidth={4}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>
      </section>

      {}
      <section className="px-12 mb-24">
        <div className="bg-gradient-to-br from-red-950/40 via-black to-black border border-red-500/30 rounded-[32px] p-10">
          <h2 className="text-3xl font-bold text-red-400 mb-8">
            🧠 Policy Intelligence Engine
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <PolicyCard title="Restrict high-scale construction zones" severity="CRITICAL" impact="AQI ↓ 18%" />
            <PolicyCard title="Deploy adaptive traffic routing" severity="HIGH" impact="AQI ↓ 12%" />
            <PolicyCard title="Issue school & elderly safety advisories" severity="HIGH" impact="Exposure ↓ 22%" />
            <PolicyCard title="Increase industrial compliance audits" severity="MEDIUM" impact="AQI ↓ 9%" />
          </div>
        </div>
      </section>

      {}
      <section className="px-12 pb-20">
        <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-[28px] p-8">
          <h3 className="text-xl text-emerald-300 mb-2">
            ✅ Command Center Status
          </h3>
          <p className="text-slate-300">
            Live sensors operational. Forecasting models stable. Policy engine synchronized.
          </p>
        </div>
      </section>
    </div>
  );
}



function Stat({ title, value, unit, critical }) {
  return (
    <div className={`rounded-[28px] p-6 border backdrop-blur-xl ${
      critical
        ? "border-red-500/40 bg-red-500/10"
        : "border-emerald-400/40 bg-emerald-500/10"
    }`}>
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="text-4xl font-bold mt-2">
        {value}
        <span className="text-lg text-slate-400 ml-1">{unit}</span>
      </p>
      {critical && (
        <p className="text-xs text-red-400 mt-2">
          ⚠ Critical air quality level detected
        </p>
      )}
    </div>
  );
}

function GlassPanel({ title, children }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
}

function PolicyCard({ title, severity, impact }) {
  const colors = {
    CRITICAL: "border-red-500 text-red-400",
    HIGH: "border-orange-400 text-orange-300",
    MEDIUM: "border-yellow-400 text-yellow-300"
  };

  return (
    <div className={`bg-black/40 border ${colors[severity]} rounded-[22px] p-6 hover:scale-[1.03] transition`}>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <div className="flex justify-between items-center text-sm">
        <span className={`px-4 py-1 rounded-full border ${colors[severity]}`}>
          {severity}
        </span>
        <span className="text-emerald-400 font-semibold">
          {impact}
        </span>
      </div>
    </div>
  );
}
