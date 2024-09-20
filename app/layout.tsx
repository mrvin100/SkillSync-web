import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import { Manrope } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
    <html lang="en">
      <body
        className={clsx(`${manrope.variable} antialiased scroll-smooth`, "")}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
