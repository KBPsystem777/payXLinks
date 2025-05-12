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

      <main className="flex-1 px-4 py-8 sm:px-6 md:px-8 lg:px-0 flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <PaymentForm />
        </div>
      </main>
      <Toaster />
    </PageLayout>
  );
}
