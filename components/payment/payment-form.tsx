"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { createPageContent, currencies, networks } from "@/lib/content";
import {
  generateShortId,
  formatShortLink,
  getCompatibleCurrencies,
} from "@/lib/utils";

export function PaymentForm() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDC");
  const [network, setNetwork] = useState("base");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [generatedLink, setGeneratedLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [compatibleCurrencies, setCompatibleCurrencies] = useState(currencies);
  const content = createPageContent;

  // Update compatible currencies when network changes
  useEffect(() => {
    setCompatibleCurrencies(
      getCompatibleCurrencies(network, currencies, networks)
    );

    // If current currency is not compatible with selected network, reset it
    const isCurrentCurrencyCompatible = getCompatibleCurrencies(
      network,
      currencies,
      networks
    ).some((c) => c.value === currency);

    if (!isCurrentCurrencyCompatible && compatibleCurrencies.length > 0) {
      setCurrency(compatibleCurrencies[0].value);
    }
  }, [network]);

  const handleGenerateLink = () => {
    if (!amount || !currency || !network) {
      toast({
        title: content.notifications.missing.title,
        description: content.notifications.missing.description,
        variant: "destructive",
      });
      return;
    }

    // Create a unique ID for this payment request
    const paymentId = Math.random().toString(36).substring(2, 15);
    const shortId = generateShortId(6);

    // Encode payment details in the URL
    const paymentLink = `${
      window.location.origin
    }/pay/${paymentId}?amount=${amount}&currency=${currency}&network=${network}&description=${encodeURIComponent(
      description
    )}&tags=${encodeURIComponent(tags)}&visibility=${visibility}`;

    setGeneratedLink(paymentLink);
    setShortLink(formatShortLink(shortId));

    toast({
      title: content.notifications.generated.title,
      description: content.notifications.generated.description,
    });
  };

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link);
    toast({
      title: content.notifications.copied.title,
      description: content.notifications.copied.description,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white border-blue-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-blue-900">{content.title}</CardTitle>
          <CardDescription className="text-blue-600">
            {content.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-blue-900">
              {content.fields.amount}
            </Label>
            <div className="flex gap-2">
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-[180px] border-blue-200 focus:border-blue-400 focus:ring-blue-400">
                  <SelectValue placeholder={content.fields.currency} />
                </SelectTrigger>
                <SelectContent>
                  {compatibleCurrencies.map((currency) => (
                    <SelectItem key={currency.value} value={currency.value}>
                      {currency.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="network" className="text-blue-900">
              {content.fields.network}
            </Label>
            <Select value={network} onValueChange={setNetwork}>
              <SelectTrigger className="border-blue-200 focus:border-blue-400 focus:ring-blue-400">
                <SelectValue placeholder={content.fields.network} />
              </SelectTrigger>
              <SelectContent>
                {networks.map((network) => (
                  <SelectItem key={network.value} value={network.value}>
                    {network.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-blue-900">
              {content.fields.description}
            </Label>
            <Textarea
              id="description"
              placeholder={content.fields.descriptionPlaceholder}
              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 min-h-[100px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {content.fields.showTags && (
            <div className="space-y-2">
              <Label htmlFor="tags" className="text-blue-900">
                {content.fields.tags}
              </Label>
              <Input
                id="tags"
                placeholder={content.fields.tagsPlaceholder}
                className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          )}

          {content.fields.showVisibilityOptions && (
            <div className="space-y-2">
              <Label className="text-blue-900">
                {content.fields.visibility}
              </Label>
              <RadioGroup
                value={visibility}
                onValueChange={setVisibility}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public" className="font-normal">
                    {content.fields.visibilityOptions.public}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="private" id="private" />
                  <Label htmlFor="private" className="font-normal">
                    {content.fields.visibilityOptions.private}
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={handleGenerateLink}
          >
            {content.buttons.generate}
          </Button>
        </CardFooter>
      </Card>

      {generatedLink && (
        <PaymentLinkCard
          link={generatedLink}
          shortLink={shortLink}
          onCopy={(link) => copyToClipboard(link)}
        />
      )}
    </div>
  );
}

interface PaymentLinkCardProps {
  link: string;
  shortLink: string;
  onCopy: (link: string) => void;
}

function PaymentLinkCard({ link, shortLink, onCopy }: PaymentLinkCardProps) {
  const content = createPageContent;

  return (
    <Card className="mt-8 bg-white border-blue-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-blue-900">Your Payment Link</CardTitle>
        <CardDescription className="text-blue-600">
          Share this link with anyone to request payment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-blue-600 mb-1">Full Link</p>
          <div className="p-3 bg-blue-50 rounded-md break-all font-mono text-sm text-blue-800">
            {link}
          </div>
        </div>

        <div>
          <p className="text-sm text-blue-600 mb-1">Short Link</p>
          <div className="p-3 bg-blue-50 rounded-md break-all font-mono text-sm text-blue-800">
            {shortLink}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          className="border-blue-200 hover:bg-blue-50 text-blue-700"
          onClick={() => onCopy(link)}
        >
          {content.buttons.copy}
        </Button>
        <Button
          variant="outline"
          className="border-blue-200 hover:bg-blue-50 text-blue-700"
          onClick={() => onCopy(shortLink)}
        >
          {content.buttons.copyShort}
        </Button>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 ml-auto">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {content.buttons.test}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
