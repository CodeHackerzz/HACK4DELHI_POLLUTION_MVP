import { motion } from "framer-motion";

export default function HotspotList({ hotspots }) {
  return (
    <div id="hotspots" className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <h2 className="text-xl font-semibold text-red-400 mb-4">
        🔥 Hotspot Detection
      </h2>

      <div className="space-y-4">
        {hotspots.map((ward, i) => (
          <motion.div
            key={ward.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between items-center p-4 rounded-xl bg-black/40 border border-red-500/30"
          >
            <div>
              <p className="font-semibold text-white">{ward.name}</p>
              <p className="text-sm text-slate-400">
                AQI {ward.aqi}
              </p>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-red-600 text-white">
              SEVERE
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
