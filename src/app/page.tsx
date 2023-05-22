import Arrows from "@/components/Arrows";
import BotCards from "@/components/BotCards";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import TopCards from "@/components/TopCards";
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Arrows />

          <h1 className="font-semibold text-3xl mt-2">Good Afternoon</h1>
          <TopCards />

          <h2 className="font-semibold text-2xl mt-4">Made for Jeong Lee</h2>
          <BotCards />
        </main>
      </div>
      <Footer />     
    </div>
  );
}
