interface TagBadgeProps {
  tag: string
  variant?: "default" | "outline"
}

export function TagBadge({ tag, variant = "default" }: TagBadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mr-1.5 mb-1.5"

  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-blue-200 text-blue-700",
  }

  return <span className={`${baseClasses} ${variantClasses[variant]}`}>{tag}</span>
}
