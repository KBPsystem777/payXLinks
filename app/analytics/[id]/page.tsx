"use client";

import { useState } from "react";
import { PageLayout } from "@/components/ui-components/page-layout";
import { PageHeader } from "@/components/ui-components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TransactionList } from "@/components/dashboard/transaction-list";
import { CurrencyIcon } from "@/components/ui-components/currency-icon";
import { TagBadge } from "@/components/ui-components/tag-badge";
import { StatusBadge } from "@/components/ui-components/status-badge";
import {
  samplePaymentLinks,
  sampleTransactions,
  siteConfig,
} from "@/lib/content";

export default function AnalyticsPage({ params }: { params: { id: string } }) {
  const [paymentLink] = useState(
    samplePaymentLinks.find((link) => link.id === params.id)
  );

  if (!paymentLink) {
    return (
      <PageLayout>
        <PageHeader
          title="Payment Link Analytics"
          backLink="/dashboard"
          showLogo={siteConfig.showLogo}
        />
        <main className="container mx-auto flex-1 py-12">
          <Card className="bg-white border-blue-100 shadow-sm">
            <CardContent className="p-8 text-center">
              <p className="text-blue-600">Payment link not found.</p>
            </CardContent>
          </Card>
        </main>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHeader
        title="Payment Link Analytics"
        backLink="/dashboard"
        showLogo={siteConfig.showLogo}
      />

      <main className="container mx-auto flex-1 py-12">
        <Card className="bg-white border-blue-100 shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">
              Payment Link Details
            </CardTitle>
            <CardDescription className="text-blue-600">
              {paymentLink.id}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-md">
              <div>
                <p className="text-sm text-blue-600">Amount</p>
                <p className="text-2xl font-bold text-blue-900">
                  {paymentLink.amount} {paymentLink.currency}
                </p>
              </div>
              <CurrencyIcon currency={paymentLink.currency} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-600 mb-1">Status</p>
                <StatusBadge status={paymentLink.status} />
              </div>

              <div className="p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-600 mb-1">Visibility</p>
                <StatusBadge status={paymentLink.visibility} />
              </div>

              <div className="p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-600 mb-1">Created</p>
                <p className="text-blue-900">{paymentLink.created}</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-600 mb-1">Description</p>
              <p className="text-blue-900">{paymentLink.description}</p>
            </div>

            {paymentLink.tags && (
              <div className="p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-600 mb-2">Tags</p>
                <div>
                  {paymentLink.tags.map((tag, i) => (
                    <TagBadge key={i} tag={tag} />
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-600 mb-1">Link</p>
              <p className="font-mono text-sm text-blue-800 break-all">
                {window.location.origin}
                {paymentLink.url}
              </p>
            </div>
          </CardContent>
        </Card>

        <TransactionList
          transactions={sampleTransactions}
          paymentLinkId={paymentLink.id}
        />
      </main>
    </PageLayout>
  );
}
