import TopMenu from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="max-full m-auto min-h-screen">
      <TopMenu  />
          <section className="max-w-screen-2xl m-auto min-h-screen p-12 mb-4 mt-1  bg-white">
            Homepage
          </section>
       <Footer />
    </main>
  );
}
