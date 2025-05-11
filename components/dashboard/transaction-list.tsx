"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatusBadge } from "@/components/ui-components/status-badge"

interface Transaction {
  id: string
  paymentLinkId: string
  amount: string
  currency: string
  status: "completed" | "pending" | "failed"
  date: string
  from: string
}

interface TransactionListProps {
  transactions: Transaction[]
  paymentLinkId?: string
}

export function TransactionList({ transactions, paymentLinkId }: TransactionListProps) {
  // Filter transactions if paymentLinkId is provided
  const filteredTransactions = paymentLinkId
    ? transactions.filter((tx) => tx.paymentLinkId === paymentLinkId)
    : transactions

  if (filteredTransactions.length === 0) {
    return (
      <Card className="bg-white border-blue-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-blue-900">Transactions</CardTitle>
        </CardHeader>
        <CardContent className="p-8 text-center">
          <p className="text-blue-600">No transactions found.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-blue-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-blue-900">Transactions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-blue-50">
            <TableRow className="hover:bg-blue-50 border-blue-100">
              <TableHead className="text-blue-700">ID</TableHead>
              <TableHead className="text-blue-700">Amount</TableHead>
              <TableHead className="text-blue-700">Date</TableHead>
              <TableHead className="text-blue-700">From</TableHead>
              <TableHead className="text-blue-700">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((tx) => (
              <TableRow key={tx.id} className="hover:bg-blue-50 border-blue-100">
                <TableCell className="font-mono text-blue-900">{tx.id}</TableCell>
                <TableCell className="text-blue-900">
                  {tx.amount} {tx.currency}
                </TableCell>
                <TableCell className="text-blue-900">{tx.date}</TableCell>
                <TableCell className="font-mono text-blue-900">{tx.from}</TableCell>
                <TableCell>
                  <StatusBadge status={tx.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
