import type React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  backLink?: string;
  backLabel?: string;
  children?: React.ReactNode;
  showLogo?: boolean;
}

export function PageHeader({
  title,
  backLink,
  backLabel = "Back",
  children,
  showLogo,
}: PageHeaderProps) {
  return (
    <header className="container mx-auto py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {showLogo && (
            <Link href="/" className="mr-6">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 mr-2 flex items-center justify-center">
                  <Image
                    src={siteConfig.logo}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="text-white font-bold text-xs"
                  />
                </div>
              </div>
            </Link>
          )}
          {backLink && (
            <Button variant="ghost" className="text-blue-600 mr-4" asChild>
              <Link href={backLink}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {backLabel}
              </Link>
            </Button>
          )}
          <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
        </div>
        {children}
      </div>
    </header>
  );
}
