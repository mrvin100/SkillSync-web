import type { Metadata } from "next";
import "@/styles/globals.css";
import clsx from "clsx";
import { Manrope } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Skill Sync",
  description: "Find the perfect freelance service for your ",
};

const manrope = Manrope({ subsets: ["latin"], weight: ['200', '400', '800'], variable: '--font-manrope' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={clsx(`${manrope.variable} antialiased scroll-smooth`, "")}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
