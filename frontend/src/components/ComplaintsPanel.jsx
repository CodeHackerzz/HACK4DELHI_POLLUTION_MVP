import { motion } from "framer-motion";

export default function ComplaintsPanel({ complaints }) {
  return (
    <div id="reports" className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <h2 className="text-xl font-semibold text-cyan-400 mb-4">
        🧾 Citizen Complaints
      </h2>

      <div className="space-y-3">
        {complaints.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl bg-black/40 border border-white/10"
          >
            <div className="flex justify-between">
              <p className="font-semibold">{c.type}</p>
              <span className="text-xs px-2 py-1 rounded bg-red-600">
                {c.severity}
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              {c.ward}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
