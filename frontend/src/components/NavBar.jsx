import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-wide">
          Pollution Command Center
        </h1>

        <div className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition">
            About Us
          </a>
          <Link to="/gov-login" className="hover:text-white transition">
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
