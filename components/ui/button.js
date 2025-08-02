export function Button({
  children,
  onClick,
  className = "",
  variant = "solid",
  ...props
}) {
  const baseClasses =
    "px-4 py-2 rounded font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    solid:
      "bg-orange-500  w-[160px] h-[60px] text-white hover:bg-orange-600 focus:ring-orange-500",
    outline:
      "border border-orange-500 w-[160px] h-[60px] text-orange-500 hover:bg-orange-50 focus:ring-orange-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
