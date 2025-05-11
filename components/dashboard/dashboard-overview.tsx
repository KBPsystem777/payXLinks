"use client"

import { Link2, CreditCard, TrendingUp } from "lucide-react"
import { StatsCard } from "@/components/ui-components/stats-card"
import { dashboardContent } from "@/lib/content"

interface DashboardOverviewProps {
  totalLinks: number
  totalTransactions: number
  totalVolume: string
}

export function DashboardOverview({ totalLinks, totalTransactions, totalVolume }: DashboardOverviewProps) {
  const content = dashboardContent

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <StatsCard title={content.stats.totalLinks} value={totalLinks} icon={<Link2 className="h-4 w-4" />} />
      <StatsCard
        title={content.stats.totalTransactions}
        value={totalTransactions}
        icon={<CreditCard className="h-4 w-4" />}
      />
      <StatsCard title={content.stats.totalVolume} value={totalVolume} icon={<TrendingUp className="h-4 w-4" />} />
    </div>
  )
}
