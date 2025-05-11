"use client";

import { useState } from "react";
import { PageLayout } from "@/components/ui-components/page-layout";
import { PageHeader } from "@/components/ui-components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  samplePaymentLinks,
  sampleUserProfile,
  profilePageContent,
  siteConfig,
} from "@/lib/content";
import { CurrencyIcon } from "@/components/ui-components/currency-icon";
import { TagBadge } from "@/components/ui-components/tag-badge";

export default function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const [userProfile] = useState(
    params.username === sampleUserProfile.username ? sampleUserProfile : null
  );

  // Filter only public and active payment links
  const [publicLinks] = useState(
    samplePaymentLinks.filter(
      (link) => link.visibility === "public" && link.status === "active"
    )
  );

  if (!userProfile) {
    return (
      <PageLayout>
        <PageHeader
          title="User Profile"
          backLink="/"
          showLogo={siteConfig.showLogo}
        />
        <main className="container mx-auto flex-1 py-12">
          <Card className="bg-white border-blue-100 shadow-sm">
            <CardContent className="p-8 text-center">
              <p className="text-blue-600">User not found.</p>
            </CardContent>
          </Card>
        </main>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHeader
        title={`@${userProfile.username}`}
        backLink="/"
        showLogo={siteConfig.showLogo}
      />

      <main className="container mx-auto flex-1 py-12">
        <Card className="bg-white border-blue-100 shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">
              {userProfile.username}'s Profile
            </CardTitle>
            <CardDescription className="text-blue-600">
              Member since {userProfile.joinedDate}
            </CardDescription>
          </CardHeader>
        </Card>

        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          {profilePageContent.subtitle}
        </h2>

        {publicLinks.length === 0 ? (
          <Card className="bg-white border-blue-100 shadow-sm">
            <CardContent className="p-8 text-center">
              <p className="text-blue-600">{profilePageContent.emptyState}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicLinks.map((link) => (
              <Card
                key={link.id}
                className="bg-white border-blue-100 shadow-sm"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900 flex justify-between items-center">
                    <span>
                      {link.amount} {link.currency}
                    </span>
                    <CurrencyIcon currency={link.currency} size="sm" />
                  </CardTitle>
                  <CardDescription className="text-blue-600 line-clamp-2">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  {link.tags && (
                    <div className="mb-4">
                      {link.tags.map((tag, i) => (
                        <TagBadge key={i} tag={tag} />
                      ))}
                    </div>
                  )}
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <a href={link.url}>Pay Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </PageLayout>
  );
}
