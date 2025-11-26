import Image from "next/image";
import { Appbar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVide";
export default function Home() {
  return (

    <main className="pb-48">
      <Appbar />
      <Hero />
      <div className="pt-4">
        <HeroVideo />
      </div>
    </main>

  )
}
