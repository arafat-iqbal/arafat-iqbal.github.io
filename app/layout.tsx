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
  title: "Arafat Iqbal | Software Engineer & AI Researcher",
  description:
    "Personal portfolio and academic profile of Arafat Iqbal. Software Engineer at Craftsmen IT, AI Researcher working on Deep Learning, Computer Vision, and Distributed Systems.",
  keywords: [
    "Arafat Iqbal",
    "Software Engineer",
    "AI Researcher",
    "Computer Vision",
    "Deep Learning",
    "Distributed Systems",
    "Craftsmen IT",
    "IIUC",
  ],
  authors: [{ name: "Arafat Iqbal" }],
  openGraph: {
    title: "Arafat Iqbal | Software Engineer & AI Researcher",
    description:
      "Personal portfolio and academic profile of Arafat Iqbal. Software Engineer at Craftsmen IT, AI Researcher working on Deep Learning, Computer Vision, and Distributed Systems.",
    url: "https://sharafat397.github.io/site",
    siteName: "Arafat Iqbal",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
