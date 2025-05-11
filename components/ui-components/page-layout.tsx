import type React from "react"
import Link from "next/link"
import { siteConfig } from "@/lib/content"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-blue-900">
      {children}
      <footer className="container mx-auto py-6 border-t border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-500 mb-2 md:mb-0">{siteConfig.footer}</p>
          <div className="flex items-center space-x-4">
            <Link href="mailto:bpxpay@gmail.com" className="text-blue-500 hover:text-blue-700">
              {siteConfig.contact.email}
            </Link>
            <Link href="https://twitter.com/bpxpay" className="text-blue-500 hover:text-blue-700">
              {siteConfig.contact.twitter}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
