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
  metadataBase: new URL("https://ruttvik-khollam.vercel.app"),
  title: "Ruttvik Khollam — Senior Software Engineer",
  description:
    "Personal portfolio of Ruttvik Khollam, a full stack web developer building fast, accessible applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Ruttvik Khollam — Senior Software Engineer",
    description:
      "Personal portfolio of Ruttvik Khollam, a full stack web developer building fast, accessible applications with React, Next.js, and TypeScript.",
    url: "https://ruttvik-khollam.vercel.app",
    siteName: "Ruttvik Khollam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
