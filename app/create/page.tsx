import { PageLayout } from "@/components/ui-components/page-layout";
import { PageHeader } from "@/components/ui-components/page-header";
import { PaymentForm } from "@/components/payment/payment-form";
import { Toaster } from "@/components/ui/toaster";
import { createPageContent, siteConfig } from "@/lib/content";

export default function CreatePaymentLink() {
  return (
    <PageLayout>
      <PageHeader
        title={createPageContent.title}
        backLink="/dashboard"
        backLabel="Dashboard"
        showLogo={siteConfig.showLogo}
      />

      <main className="container mx-auto flex-1 py-12">
        <PaymentForm />
      </main>
      <Toaster />
    </PageLayout>
  );
}
