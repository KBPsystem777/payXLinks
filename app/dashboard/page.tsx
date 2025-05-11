"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { PageLayout } from "@/components/ui-components/page-layout";
import { PageHeader } from "@/components/ui-components/page-header";
import { PaymentLinksTable } from "@/components/payment/payment-links-table";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { ProfileSection } from "@/components/dashboard/profile-section";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  dashboardContent,
  samplePaymentLinks,
  sampleUserProfile,
  siteConfig,
} from "@/lib/content";

export default function Dashboard() {
  const content = dashboardContent;
  const [links] = useState(samplePaymentLinks);
  const [userProfile] = useState(sampleUserProfile);

  // Calculate dashboard stats
  const totalLinks = links.length;
  const totalTransactions = links.reduce(
    (sum, link) => sum + link.transactions,
    0
  );
  const totalVolume =
    links
      .reduce((sum, link) => {
        // Simple calculation for demo purposes
        // In a real app, you'd need to handle different currencies properly
        return sum + Number.parseFloat(link.amount) * link.transactions;
      }, 0)
      .toFixed(2) + " USDC";

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast({
      title: "Copied to clipboard",
      description: "Payment link has been copied to your clipboard.",
    });
  };

  return (
    <PageLayout>
      <PageHeader title={content.title} showLogo={siteConfig.showLogo}>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/create">
            <Plus className="mr-2 h-4 w-4" />
            {content.createButton}
          </Link>
        </Button>
      </PageHeader>

      <main className="container mx-auto flex-1 py-12">
        <DashboardOverview
          totalLinks={totalLinks}
          totalTransactions={totalTransactions}
          totalVolume={totalVolume}
        />

        <ProfileSection username={userProfile.username} />

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            {content.subtitle}
          </h2>
          <PaymentLinksTable links={links} onCopy={handleCopyLink} />
        </div>
      </main>
      <Toaster />
    </PageLayout>
  );
}
