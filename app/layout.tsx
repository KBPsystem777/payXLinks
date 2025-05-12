import type { Metadata } from "next";

import { Providers } from "./providers";

import "./globals.css";
import "@coinbase/onchainkit/styles.css";

export const metadata: Metadata = {
  title: "bpxpay",
  description: "Created by bpxpay",
  generator: "bpxpay.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
