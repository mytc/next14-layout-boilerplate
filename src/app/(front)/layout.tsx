import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from '@/lib/utils'
import TopMenu from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";


export const metadata: Metadata = {
  title: "Frontend Page",
  description: "This is he front end page",
};

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (//inter.className

        
  <main className="max-full m-auto min-h-screen">
      <TopMenu  />
          <section className="max-w-screen-2xl m-auto min-h-screen p-12 mb-4 mt-1  bg-white">
           About
          </section>
       <Footer />
    </main>

  ); 
}
