import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Minimal Button component compatible with `@/components/ui/button`
 * Supports `variant`, `size`, and `className` props.
 */
export function Button({ className = "", variant = "default", size = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:ring-offset-2 " +
    "focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-500",
    outline: "border border-purple-500/50 text-purple-100 bg-transparent hover:bg-purple-500/10",
    ghost: "bg-transparent text-gray-200 hover:bg-gray-800/60",
  };

  const sizes = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "h-10 w-10 p-0",
  };

  return (
    <button
      className={cn(
        base,
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    />
  );
}

export default Button;
