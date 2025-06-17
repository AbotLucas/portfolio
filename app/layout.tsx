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
  title: "Abot Lucas - Frontend Developer",
  description: "Mi portfolio de trabajo como frontend developer.",
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
