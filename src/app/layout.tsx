import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'
import TopMenu from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Provider from './context/authContext'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (//inter.className
    <html lang="en">
       <body className="bg-white">
          <Provider>
              {children}
          </Provider>
        </body>
    </html>
  ); 
}
