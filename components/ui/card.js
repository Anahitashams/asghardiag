export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white shadow-orange-500  shadow-md rounded-lg border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
