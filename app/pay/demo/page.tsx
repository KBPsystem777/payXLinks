"use client";

import { PageLayout } from "@/components/ui-components/page-layout";
import { PageHeader } from "@/components/ui-components/page-header";
import { PaymentRequest } from "@/components/payment/payment-request";
import { Toaster } from "@/components/ui/toaster";
import { paymentPageContent, siteConfig } from "@/lib/content";
import { networkInterfaces } from "os";

export default function DemoPaymentPage() {
  // Demo payment details
  const paymentDetails = {
    id: "demo123",
    amount: "25",
    currency: "USDC",
    description: "Demo payment request",
    tags: "demo,test",
    network: "Base",
  };

  return (
    <PageLayout>
      <PageHeader
        title={paymentPageContent.demo.title}
        backLink="/"
        showLogo={siteConfig.showLogo}
      />

      <main className="container mx-auto flex-1 py-12">
        <PaymentRequest paymentDetails={paymentDetails} isDemo={true} />
      </main>
      <Toaster />
    </PageLayout>
  );
}
