"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { PageLayout } from "@/components/ui-components/page-layout"
import { PageHeader } from "@/components/ui-components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { samplePaymentLinks } from "@/lib/content"

export default function ShortLinkRedirect({ params }: { params: { shortId: string } }) {
  const router = useRouter()

  // In a real app, you would fetch the payment link from the database
  // For demo purposes, we'll use the sample data
  useEffect(() => {
    // Find the payment link with the matching shortId
    const paymentLink = samplePaymentLinks.find((link) => link.shortId === params.shortId)

    if (paymentLink) {
      // Redirect to the full payment link
      setTimeout(() => {
        router.push(paymentLink.url)
      }, 1000)
    }
  }, [params.shortId, router])

  return (
    <PageLayout>
      <PageHeader title="Redirecting..." showLogo={true} />
      <main className="container mx-auto flex-1 py-12">
        <Card className="max-w-md mx-auto bg-white border-blue-100 shadow-sm">
          <CardContent className="p-8 flex flex-col items-center justify-center">
            <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-4" />
            <p className="text-blue-900 text-center">Redirecting to payment page...</p>
          </CardContent>
        </Card>
      </main>
    </PageLayout>
  )
}
