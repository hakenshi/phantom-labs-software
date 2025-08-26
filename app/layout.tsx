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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 min-h-screen text-white`}
      >
        {/* Gradiente borrado de fundo */}
        {/* <div className="inset-0 bg-gradient-to-br from-sky-400/10 via-purple-500/20 to-sky-600/30 blur-3xl scale-110" /> */}
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-sky-600/15 to-secondary/20 blur-2xl -z-10" />
        <div className="absolute inset-0 bg-zinc-slate/20 backdrop-blur-sm -z-10" />
        {children}
      </body>
    </html>
  );
}
