import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { raleway } from "./fonts/fonts";

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
  title: "PauloDibuja",
  description: "Desarrollador de videojuegos indie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.className} antialiased bg-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}