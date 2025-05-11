"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, CheckCircle } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { CurrencyIcon } from "@/components/ui-components/currency-icon"
import { TagBadge } from "@/components/ui-components/tag-badge"
import { NetworkBadge } from "@/components/ui-components/network-badge"
import { paymentPageContent } from "@/lib/content"
import Link from "next/link"

interface PaymentRequestProps {
  paymentDetails: {
    id: string
    amount: string
    currency: string
    network: string
    description: string
    tags?: string
    visibility?: string
  }
  isDemo?: boolean
}

export function PaymentRequest({ paymentDetails, isDemo = false }: PaymentRequestProps) {
  const [walletConnected, setWalletConnected] = useState(false)
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const content = paymentPageContent
  const tags = paymentDetails.tags ? paymentDetails.tags.split(",").map((tag) => tag.trim()) : []

  // Simulate wallet connection
  const connectWallet = () => {
    toast({
      title: content.notifications.connecting.title,
      description: content.notifications.connecting.description,
    })

    // Simulate connection delay
    setTimeout(() => {
      setWalletConnected(true)
      toast({
        title: content.notifications.connected.title,
        description: content.notifications.connected.description,
      })
    }, 1500)
  }

  // Simulate payment
  const makePayment = () => {
    toast({
      title: content.notifications.processing.title,
      description: content.notifications.processing.description,
    })

    // Simulate payment processing
    setTimeout(() => {
      setPaymentCompleted(true)
      toast({
        title: content.notifications.success.title,
        description: content.notifications.success.description
          .replace("{amount}", paymentDetails.amount)
          .replace("{currency}", paymentDetails.currency),
      })
    }, 2000)
  }

  // Auto-prompt wallet connection
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!walletConnected) {
        connectWallet()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-md mx-auto">
      {paymentCompleted ? (
        <PaymentSuccessScreen paymentDetails={paymentDetails} />
      ) : (
        <Card className="bg-white border-blue-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-blue-900">{isDemo ? content.demo.title : content.title}</CardTitle>
            <CardDescription className="text-blue-600">
              {isDemo ? content.demo.description : `Payment ID: ${paymentDetails.id}`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-md">
              <div>
                <p className="text-sm text-blue-600">{content.details.amount}</p>
                <p className="text-2xl font-bold text-blue-900">
                  {paymentDetails.amount} {paymentDetails.currency}
                </p>
              </div>
              <CurrencyIcon currency={paymentDetails.currency} />
            </div>

            {paymentDetails.description && (
              <div className="p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-600">{content.details.description}</p>
                <p className="text-blue-900">{paymentDetails.description}</p>
              </div>
            )}

            {tags.length > 0 && (
              <div className="p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-600 mb-2">{content.details.tags}</p>
                <div>
                  {tags.map((tag, index) => (
                    <TagBadge key={index} tag={tag} />
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-600">{content.details.network}</p>
              <div className="flex items-center mt-1">
                <NetworkBadge network={paymentDetails.network} />
              </div>
            </div>

            {isDemo && (
              <div className="p-4 bg-blue-50 rounded-md border border-blue-200">
                <p className="text-blue-700 text-sm">
                  <strong>{content.demo.notice}</strong>
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex-col space-y-4">
            {!walletConnected ? (
              <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center" onClick={connectWallet}>
                <Wallet className="mr-2 h-4 w-4" />
                {content.buttons.connect}
              </Button>
            ) : (
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={makePayment}>
                {content.buttons.pay} {paymentDetails.amount} {paymentDetails.currency}
              </Button>
            )}

            <p className="text-xs text-blue-500 text-center">{content.legal}</p>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

interface PaymentSuccessScreenProps {
  paymentDetails: {
    id: string
    amount: string
    currency: string
    network: string
    description: string
  }
}

function PaymentSuccessScreen({ paymentDetails }: PaymentSuccessScreenProps) {
  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-white border-blue-100 shadow-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-blue-900">Payment Successful!</CardTitle>
          <CardDescription className="text-blue-600">Your transaction has been completed successfully</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center p-4 bg-blue-50 rounded-md">
            <div>
              <p className="text-sm text-blue-600">Amount Paid</p>
              <p className="text-2xl font-bold text-blue-900">
                {paymentDetails.amount} {paymentDetails.currency}
              </p>
            </div>
            <CurrencyIcon currency={paymentDetails.currency} />
          </div>

          <div className="p-4 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-600">Transaction ID</p>
            <p className="font-mono text-blue-900">{paymentDetails.id}</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-600">Network</p>
            <div className="mt-1">
              <NetworkBadge network={paymentDetails.network} />
            </div>
          </div>

          {paymentDetails.description && (
            <div className="p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-600">Payment For</p>
              <p className="text-blue-900">{paymentDetails.description}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex-col space-y-4">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" className="w-full border-blue-200 hover:bg-blue-50 text-blue-700">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
