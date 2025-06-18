import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Cover from "@/components/cover";
import { LanguageProvider } from "@/i18n/index";
import { ToastProvider } from "@/utils/toast";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Abot - Frontend Developer",
  description: "Mi portfolio de trabajo como frontend developer.",
  openGraph: {
    title: "Lucas Abot – Frontend Developer",
    description: "Portfolio profesional, hecho con React y pasión.",
    url: "https://abotlucas.netlify.app",
    siteName: "Lucas Abot Portfolio",
    images: [
      {
        url: "https://abotlucas.netlify.app/preview.PNG",
        width: 1200,
        height: 630,
        alt: "Lucas Abot Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <LanguageProvider>
          <ToastProvider>
            <Cover />
            <Header />
            <Navbar />
            {children}
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
