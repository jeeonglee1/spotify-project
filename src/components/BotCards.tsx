import Image from "next/image";

 export default function BotCards() {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src={"/lilac.jpg"} className="w-full" width={104} height={104} alt={"Capa do álbum Lilac da cantora IU"} />
              <strong className="font-semibold">Lilac</strong>
              <span className="text-sm text-zinc-400">Korean and R&B</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src={"/blackpink.png"} className="w-full" width={104} height={104} alt={"Capa do álbum The Album do grupo Blackpink"} />
              <strong className="font-semibold">The Album</strong>
              <span className="text-sm text-zinc-400">K-pop, Hip-Hop and Dance</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src={"/amiri.jpg"} className="w-full" width={104} height={104} alt={"Capa do álbum O.N.F.K do cantor Amiri"} />
              <strong className="font-semibold">O.N.F.K</strong>
              <span className="text-sm text-zinc-400">Hip-Hop and R&B </span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src={"/ariana.jpg"} className="w-full" width={104} height={104} alt={"Capa do álbum Dangerous Woman da cantora Ariana Grande"} />
              <strong className="font-semibold">Dangerous Woman</strong>
              <span className="text-sm text-zinc-400">Pop and R&B </span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src={"/wastingLight.jpg"} className="w-full" width={104} height={104} alt={"Capa do álbum Wasting Light da banda Foo Fighters"} />
              <strong className="font-semibold">WastingLight</strong>
              <span className="text-sm text-zinc-400">Band and Rock</span>
            </a>
          </div>
  )
 }