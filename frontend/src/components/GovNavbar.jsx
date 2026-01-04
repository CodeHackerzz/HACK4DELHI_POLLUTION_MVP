import { motion } from "framer-motion";

export default function GovNavbar() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 px-10 py-4 flex justify-between items-center"
    >
      <div>
        <p className="text-xs text-emerald-400 tracking-widest">
          ● GOVERNMENT COMMAND CENTER • LIVE
        </p>
        <h1 className="text-lg font-bold text-white">
          Pollution Intelligence Hub
        </h1>
      </div>
    </motion.div>
  );
}
