import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/providers";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet verifier",
  description: "verify users wallet",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.jpg",
        href: "/favicon.jpg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.jpg",
        href: "/favicon.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head></head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
