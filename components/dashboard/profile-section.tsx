"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { Copy } from "lucide-react"
import { dashboardContent, siteConfig } from "@/lib/content"

interface ProfileSectionProps {
  username: string
}

export function ProfileSection({ username }: ProfileSectionProps) {
  const content = dashboardContent.profileSection
  const [profileUrl] = useState(`${siteConfig.baseUrl}/${username}`)

  const copyProfileLink = () => {
    navigator.clipboard.writeText(profileUrl)
    toast({
      title: "Copied to clipboard",
      description: "Your profile link has been copied to your clipboard.",
    })
  }

  return (
    <Card className="bg-white border-blue-100 shadow-sm mb-8">
      <CardHeader>
        <CardTitle className="text-blue-900">{content.title}</CardTitle>
        <CardDescription className="text-blue-600">{content.usernameDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className="flex-1 font-mono text-sm bg-blue-50 p-3 rounded-md text-blue-800 break-all">{profileUrl}</div>
          <Button
            variant="outline"
            size="sm"
            className="border-blue-200 hover:bg-blue-50 text-blue-700"
            onClick={copyProfileLink}
          >
            <Copy className="h-4 w-4 mr-2" />
            {content.copyButton}
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <a href={`/settings`}>{content.updateButton}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
