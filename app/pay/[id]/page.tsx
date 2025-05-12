"use client";

import { useSearchParams } from "next/navigation";
import { PageLayout } from "@/components/ui-components/page-layout";
import { PageHeader } from "@/components/ui-components/page-header";
import { PaymentRequest } from "@/components/payment/payment-request";
import { Toaster } from "@/components/ui/toaster";
import { paymentPageContent } from "@/lib/content";

export default function PaymentPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const paymentDetails = {
    id: params.id,
    amount: searchParams.get("amount") || "0",
    currency: searchParams.get("currency") || "USDC",
    network: searchParams.get("network") || "ethereum",
    description: searchParams.get("description") || "",
    tags: searchParams.get("tags") || "",
    visibility: searchParams.get("visibility") || "public",
  };

  return (
    <PageLayout>
      <PageHeader
        title={paymentPageContent.title}
        backLink="/"
        showLogo={paymentPageContent.showLogo}
      />

      <main className="container mx-auto flex-1 py-12">
        <PaymentRequest paymentDetails={paymentDetails} />
      </main>
      <Toaster />
    </PageLayout>
  );
}
