"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, ExternalLink, BarChart2 } from "lucide-react"
import { StatusBadge } from "@/components/ui-components/status-badge"
import { TagBadge } from "@/components/ui-components/tag-badge"
import { NetworkBadge } from "@/components/ui-components/network-badge"
import { dashboardContent } from "@/lib/content"
import { formatShortLink } from "@/lib/utils"

interface PaymentLink {
  id: string
  shortId?: string
  amount: string
  currency: string
  network: string
  description: string
  tags?: string[]
  created: string
  url: string
  transactions: number
  status: "active" | "inactive"
  visibility: "public" | "private"
}

interface PaymentLinksTableProps {
  links: PaymentLink[]
  onCopy: (link: string) => void
}

export function PaymentLinksTable({ links, onCopy }: PaymentLinksTableProps) {
  const content = dashboardContent

  if (links.length === 0) {
    return (
      <Card className="bg-white border-blue-100 shadow-sm">
        <CardContent className="p-8 text-center">
          <p className="text-blue-600">{content.emptyState}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-blue-100 shadow-sm">
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-blue-50">
            <TableRow className="hover:bg-blue-50 border-blue-100">
              <TableHead className="text-blue-700">{content.table.headers.id}</TableHead>
              <TableHead className="text-blue-700">{content.table.headers.amount}</TableHead>
              <TableHead className="text-blue-700">{content.table.headers.description}</TableHead>
              <TableHead className="text-blue-700">{content.table.headers.network}</TableHead>
              <TableHead className="text-blue-700">{content.table.headers.transactions}</TableHead>
              <TableHead className="text-blue-700">{content.table.headers.status}</TableHead>
              <TableHead className="text-blue-700">{content.table.headers.visibility}</TableHead>
              <TableHead className="text-blue-700 text-right">{content.table.headers.actions}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link) => (
              <TableRow key={link.id} className="hover:bg-blue-50 border-blue-100">
                <TableCell className="font-mono text-blue-900">
                  {link.shortId ? formatShortLink(link.shortId) : link.id.substring(0, 10)}
                </TableCell>
                <TableCell className="text-blue-900">
                  {link.amount} {link.currency}
                </TableCell>
                <TableCell className="text-blue-900">
                  <div>
                    <p className="truncate max-w-[200px]">{link.description}</p>
                    <div className="mt-1">{link.tags && link.tags.map((tag, i) => <TagBadge key={i} tag={tag} />)}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <NetworkBadge network={link.network} size="sm" />
                </TableCell>
                <TableCell className="text-blue-900 font-medium">{link.transactions}</TableCell>
                <TableCell>
                  <StatusBadge status={link.status} />
                </TableCell>
                <TableCell>
                  <StatusBadge status={link.visibility} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      onClick={() =>
                        onCopy(link.shortId ? formatShortLink(link.shortId) : `${window.location.origin}${link.url}`)
                      }
                    >
                      <span className="sr-only">Copy link</span>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      asChild
                    >
                      <Link href={`/analytics/${link.id}`}>
                        <span className="sr-only">View analytics</span>
                        <BarChart2 className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      asChild
                    >
                      <Link href={link.url} target="_blank">
                        <span className="sr-only">Open link</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
