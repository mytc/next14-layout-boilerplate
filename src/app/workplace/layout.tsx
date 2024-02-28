import type { Metadata } from "next";
import AdminSidebar from "@/components/ui/AdminSidebar";
import AdminTopBar from "@/components/ui/AdminTopBar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Worker's place",
};

export default function WorkplaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (//inter.className
          
          <main className="bg-white flex min-h-screen flex-row">
        
            <section className="md:flex flex-col w-1/6 bg-gray-800">
              <AdminSidebar />
            </section>
            
            <section className="flex w-5/6 flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                   <AdminTopBar />
                </div>

                <div className="p-4">
                 {children}
                </div>
                
            </section>        
    
          </main>
    
     
  ); 
}
