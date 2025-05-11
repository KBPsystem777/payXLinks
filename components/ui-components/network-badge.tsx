import { getNetworkColor } from "@/lib/utils"

interface NetworkBadgeProps {
  network: string
  size?: "sm" | "md" | "lg"
}

export function NetworkBadge({ network, size = "md" }: NetworkBadgeProps) {
  const colorClasses = getNetworkColor(network)

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs px-2.5 py-0.5",
    lg: "text-sm px-3 py-1",
  }

  // Get network display name
  const getNetworkName = (networkValue: string): string => {
    const networks: Record<string, string> = {
      ethereum: "Ethereum",
      base: "Base",
      optimism: "Optimism",
      arbitrum: "Arbitrum",
      polygon: "Polygon",
      solana: "Solana",
    }

    return networks[networkValue] || networkValue
  }

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${colorClasses} ${sizeClasses[size]}`}>
      {getNetworkName(network)}
    </span>
  )
}
