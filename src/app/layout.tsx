import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Space_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { siteConfig } from "../data/siteConfig";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Yechan Kim`,
  },
  description: siteConfig.description,
  keywords: ["Yechan Kim", "software engineer", "entrepreneur", "UVA", "AI", "product", "blog"],
  authors: [{ name: "Yechan Kim", url: siteConfig.url }],
  creator: "Yechan Kim",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Yechan Kim",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@yechankim",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${spaceMono.variable} ${dmSerifDisplay.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

