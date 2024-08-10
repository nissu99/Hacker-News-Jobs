import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {TopBar} from "@/components/header"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zapier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar/>
        {children}
        
        
        </body>

    </html>
  );
}
