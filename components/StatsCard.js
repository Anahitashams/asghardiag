export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center gap-4 border-t-4 border-orange-500">
      <div className="text-orange-500">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
