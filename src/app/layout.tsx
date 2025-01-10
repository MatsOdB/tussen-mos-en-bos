import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const alice = localFont({
  src: [
    {
      path: "./Alice-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Alice-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alice",
  display: "swap",
});

const verryBerry = localFont({
  src: [
    {
      path: "./SVN-Very_Berry.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SVN-Very_Berry.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-veryberry",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tussen mos en bos",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alice.variable} ${verryBerry.variable} antialiased bg-orange-50 h-full`}
      >
        {children}
      </body>
    </html>
  );
}
