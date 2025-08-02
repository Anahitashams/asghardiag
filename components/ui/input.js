// components/ui/input.js
export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full h-16 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${className}`}
      {...props}
    />
  );
}
