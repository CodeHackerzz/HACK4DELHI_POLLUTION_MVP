export default function AlertPanel({ rising }) {
  if (!rising) return null;

  return (
    <div className="bg-red-600/20 border border-red-500 rounded-2xl p-4 mb-8">
      <p className="font-semibold text-red-400">
        ⚡ Predictive Alert
      </p>
      <p className="text-sm text-slate-200 mt-1">
        AQI trend indicates rapid deterioration in the next 6 hours.
        Immediate mitigation recommended.
      </p>
    </div>
  );
}
