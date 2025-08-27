import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GridBackground from "@/components/ui/GridBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phantom Labs",
  description: "Phantom Labs Software is one of the leading software development companies in Brazil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 min-h-screen text-white`}
      >
        <div className="absolute inset-0 bg-linear-120 from-transparent via-primary/40 to-transparent blur-2xl z-0" />
        <div className="absolute inset-0 bg-linear-120 from-transparent via-transparent to-secondary blur-2xl z-0" />
        <div className="absolute -bottom-30 left-0 right-0 w-screen h-40 bg-slate-900 blur-2xl z-10" />
        <GridBackground />
        {/* <div className="absolute bottom-0 bg-black/20 blur-3xl z-10" /> */}
        {/* <div className="absolute inset-0 blur-2xl -z-10 bg-black/10 backdrop-blur-2xl"></div> */}
        {/* Transição borrada */}
        {children}
      </body>
    </html>
  );
}
