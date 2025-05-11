import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  description: string
  actionText: string
  actionLink: string
}

export function FeatureCard({ title, description, actionText, actionLink }: FeatureCardProps) {
  return (
    <Card className="bg-white border-blue-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-blue-900">{title}</CardTitle>
        <CardDescription className="text-blue-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-blue-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
          <Link href={actionLink}>
            {actionText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
