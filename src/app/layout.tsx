import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizki Aziz Husni | Frontend Developer",
  description: "Frontend Developer With 5+ years of frontend expertise, I craft clean, performant, and delightful experiences powered by modern technologies.",
  openGraph: {
    title: "Rizki Aziz Husni | Frontend Developer",
    description: "Frontend Developer With 5+ years of frontend expertise, I craft clean, performant, and delightful experiences powered by modern technologies.",
    type: "website",
    url: "https://rizki-aziz.vercel.app",
    siteName: "Rizki Aziz Husni",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizki Aziz Husni | Frontend Developer",
      }
    ]
  },
  twitter: {
    title: "Rizki Aziz Husni | Frontend Developer",
    description: "Frontend Developer With 5+ years of frontend expertise, I craft clean, performant, and delightful experiences powered by modern technologies.",
    card: "summary_large_image",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizki Aziz Husni | Frontend Developer",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
