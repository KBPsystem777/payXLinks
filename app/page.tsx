import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Plus,
  Pen,
  Share2,
  Wallet,
  Network,
  User,
  Zap,
  BarChart2,
  Link2,
  DollarSign,
  Check,
} from "lucide-react";
import { PageLayout } from "@/components/ui-components/page-layout";
import { PageHeader } from "@/components/ui-components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homepageContent, siteConfig } from "@/lib/content";
import { ConnectAndSIWE } from "@/components/ConnectAndSIWE";

import {
  Wallet as OckWallet,
  ConnectWallet,
  WalletModal,
  WalletDropdown,
} from "@coinbase/onchainkit/wallet";

export default function Home() {
  const content = homepageContent;

  // Helper function to get icon component
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Pen: <Pen className="h-5 w-5" />,
      Share2: <Share2 className="h-5 w-5" />,
      Wallet: <Wallet className="h-5 w-5" />,
      Network: <Network className="h-5 w-5" />,
      User: <User className="h-5 w-5" />,
      Zap: <Zap className="h-5 w-5" />,
      BarChart2: <BarChart2 className="h-5 w-5" />,
      Link: <Link2 className="h-5 w-5" />,
      DollarSign: <DollarSign className="h-5 w-5" />,
    };
    return icons[iconName] || <Check className="h-5 w-5" />;
  };

  return (
    <PageLayout>
      <PageHeader title={siteConfig.name} showLogo={siteConfig.showLogo}>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            Connect your wallet
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
        </div>
      </PageHeader>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              {content.hero.title}
            </h1>
            <p className="text-blue-600 max-w-2xl mx-auto mb-10 text-lg">
              {content.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/create">
                  {content.hero.primaryButton} <Plus className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-200 hover:bg-blue-50 text-blue-700"
              >
                <Link href="/dashboard">
                  {content.hero.secondaryButton}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              {content.howItWorks.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.howItWorks.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getIcon(step.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    {step.title}
                  </h3>
                  <p className="text-blue-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white border-blue-100 shadow-sm"
                >
                  <CardHeader>
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                      {getIcon(feature.icon)}
                    </div>
                    <CardTitle className="text-blue-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-blue-50 border-blue-100 shadow-sm"
                >
                  <CardContent className="pt-6">
                    <p className="text-blue-700 italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-200 mr-3"></div>
                      <div>
                        <p className="font-semibold text-blue-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-blue-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              {content.faq.title}
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {content.faq.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-blue-100"
                  >
                    <AccordionTrigger className="px-6 text-blue-900 hover:text-blue-700 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-blue-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              {content.cta.description}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link href="/create">{content.cta.button}</Link>
            </Button>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
