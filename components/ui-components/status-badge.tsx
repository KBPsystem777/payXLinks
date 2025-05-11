interface StatusBadgeProps {
  status: "active" | "inactive" | "pending" | "completed" | "failed" | "public" | "private"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    active: { label: "Active", classes: "bg-green-100 text-green-800" },
    inactive: { label: "Inactive", classes: "bg-gray-100 text-gray-800" },
    pending: { label: "Pending", classes: "bg-yellow-100 text-yellow-800" },
    completed: { label: "Completed", classes: "bg-green-100 text-green-800" },
    failed: { label: "Failed", classes: "bg-red-100 text-red-800" },
    public: { label: "Public", classes: "bg-blue-100 text-blue-800" },
    private: { label: "Private", classes: "bg-gray-100 text-gray-800" },
  }

  const { label, classes } = statusConfig[status]

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${classes}`}>
      {label}
    </span>
  )
}
