import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white overflow-hidden">

      {}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/5 border-b border-white/10"
      >
        <h1 className="text-xl font-bold tracking-wide">
          Pollution Command Center
        </h1>

        <div className="flex items-center gap-6">
          {}

          {}
          <button
            onClick={() => navigate("/role")}
            className="px-5 py-2 rounded-xl bg-emerald-500 hover:scale-105 transition font-semibold text-black shadow-lg shadow-emerald-500/30"
          >
            Sign Up
          </button>

          {}
          <button
            onClick={() => navigate("/gov-login")}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:scale-105 transition font-semibold text-black shadow-lg shadow-cyan-500/30"
          >
            Login
          </button>
        </div>
      </motion.div>

      {}
      <div className="flex items-center justify-center min-h-[85vh] px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Twin for <br /> Urban Air Quality
            </h2>

            <p className="text-slate-400 mt-6 text-lg max-w-xl">
              A real-time pollution intelligence platform that empowers citizens
              and governments to monitor air quality, detect hotspots, and
              take data-driven action.
            </p>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              About Us
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Pollution Command Center is a digital governance platform
              designed to visualize ward-wise pollution data using a
              software-Hardware digital twin approach.
              <br /><br />
              Citizens gain awareness and safety insights, while
              governments receive policy intelligence to respond faster
              and smarter.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
