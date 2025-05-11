"use client";

import type React from "react";

import { useState } from "react";

import { PageLayout } from "@/components/ui-components/page-layout";
import { PageHeader } from "@/components/ui-components/page-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

import { settingsContent, sampleUserProfile, siteConfig } from "@/lib/content";

export default function SettingsPage() {
  const content = settingsContent;
  const [username, setUsername] = useState(sampleUserProfile.username);
  const [email, setEmail] = useState(sampleUserProfile.email);
  const [notificationPreferences, setNotificationPreferences] = useState(
    sampleUserProfile.notificationPreferences
  );
  const [profileUrl, setProfileUrl] = useState(
    `${siteConfig.baseUrl}/${sampleUserProfile.username}`
  );

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setProfileUrl(`${siteConfig.baseUrl}/${e.target.value}`);
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile settings have been saved.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notification preferences updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const toggleNotification = (key: keyof typeof notificationPreferences) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [key]: !notificationPreferences[key],
    });
  };

  return (
    <PageLayout>
      <PageHeader
        title={content.title}
        backLink="/dashboard"
        showLogo={siteConfig.showLogo}
      />

      <main className="container mx-auto flex-1 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="bg-white border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">
                {content.profileSection.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-blue-900">
                  {content.profileSection.username}
                </Label>
                <Input
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                />
                <p className="text-sm text-blue-600">
                  {content.profileSection.usernameDescription}{" "}
                  <span className="font-mono">{profileUrl}</span>
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-900">
                  {content.profileSection.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleSaveProfile}
              >
                {content.profileSection.saveButton}
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">
                {content.notificationsSection.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-blue-900">
                  {content.notificationsSection.emailNotifications}
                </h3>

                <div className="flex items-center justify-between">
                  <Label htmlFor="payment-received" className="text-blue-900">
                    {content.notificationsSection.paymentReceived}
                  </Label>
                  <Switch
                    id="payment-received"
                    checked={notificationPreferences.paymentReceived}
                    onCheckedChange={() =>
                      toggleNotification("paymentReceived")
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="payment-failed" className="text-blue-900">
                    {content.notificationsSection.paymentFailed}
                  </Label>
                  <Switch
                    id="payment-failed"
                    checked={notificationPreferences.paymentFailed}
                    onCheckedChange={() => toggleNotification("paymentFailed")}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleSaveNotifications}
              >
                {content.notificationsSection.saveButton}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Toaster />
    </PageLayout>
  );
}
