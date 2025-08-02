// components/ui/textarea.js
export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${className}`}
      {...props}
    />
  );
}
