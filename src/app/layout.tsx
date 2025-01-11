import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ruttvik Khollam",
  description: "Personal portfolio website of Ruttvik Khollam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile.jpg" sizes="32x32" type="image/png" />
        <meta property="og:title" content="Ruttvik Khollam" />
        <meta
          property="og:description"
          content="Personal portfolio website of Ruttvik Khollam"
        />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://ruttvik-khollam.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ruttvik Khollam" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-3 bg-background text-foreground`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
