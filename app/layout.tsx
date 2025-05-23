import type { Metadata } from "next";
import {  Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paswal heating and cooling",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistMono.variable}`}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
