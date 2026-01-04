import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-black">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 w-[420px] shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Choose Your Role
        </h2>

        <p className="text-center text-slate-400 mb-10 text-sm">
          Public users can continue directly. Government access requires authorization.
        </p>

        {/* CITIZEN (PRIMARY / DEFAULT) */}
        <button
          onClick={() => navigate("/dashboard")}
          className="relative w-full mb-6 py-4 rounded-2xl 
                     bg-emerald-500 text-black font-semibold text-lg 
                     hover:scale-105 hover:shadow-[0_0_25px_#10b981] 
                     transition-all"
        >
          👥 Citizen
          <span className="absolute top-1 right-3 text-xs bg-black/80 text-emerald-400 px-2 py-0.5 rounded-full">
            Public
          </span>
        </button>

        {/* GOVERNMENT (RESTRICTED) */}
        <button
          onClick={() => navigate("/gov-login")}
          className="relative w-full py-4 rounded-2xl 
                     border border-white/30 text-white text-lg font-semibold
                     hover:bg-emerald-500 hover:text-black hover:scale-105 
                     hover:shadow-[0_0_25px_#10b981] transition-all"
        >
          🏛 Government
          <span className="absolute top-1 right-3 text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full border border-red-400/40">
            Restricted
          </span>
        </button>
      </motion.div>
    </div>
  );
}
