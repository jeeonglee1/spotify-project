import { Play } from "lucide-react";
import Image from "next/image";

export default function TopCards() {
  return (
    <div className="grid grid-cols-3 gap-4 center mt-4">
            <a href="#" className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group">
              <Image src={"/wastingLight.jpg"} width={104} height={104} alt={"Capa do álbum Wasting Light da banda Foo Fighters"} />
              <strong>WastingLight</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-6 flex justify-center items-center w-11 h-11 pr-1 invisible group-hover:visible hover:-translate-y-0.5">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group">
              <Image src={"/lilac.jpg"}  width={104} height={104} alt={"Capa do álbum Lilac da cantora IU"} />
              <strong>Lilac</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-6 flex justify-center items-center w-10 h-10 pr-1 invisible group-hover:visible hover:-translate-y-0.5">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group">
              <Image src={"/blackpink.png"} width={104} height={104} alt={"Capa do áblum Born Pink do grupo Blackpink"} />
              <strong>The Album</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-6 flex justify-center items-center w-10 h-10 pr-1 invisible group-hover:visible hover:-translate-y-0.5">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group">
              <Image src={"/jonasbrothers.jpg"} width={104} height={104} alt={"Capa do álbum The Family Business do grupo Jonas Brothers"} />
              <strong>The Family Business</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-6 flex justify-center items-center w-10 h-10 pr-1 invisible group-hover:visible hover:-translate-y-0.5">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group">
              <Image src={"/ariana.jpg"} width={104} height={104} alt={"Capa do álbum Dangerous Woman da cantora Ariana Grande"} />
              <strong>Dangerous Woman</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-6 flex justify-center items-center w-10 h-10 pr-1 invisible group-hover:visible hover:-translate-y-0.5">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group">
              <Image src={"/amiri.jpg"} width={104} height={104} alt={"Capa do álbum O.N.F.K do cantor Amiri"} />
              <strong>O.N.F.K</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-6 flex justify-center items-center w-10 h-10 pr-1 invisible group-hover:visible hover:-translate-y-0.5">
                <Play fill="bg-black"/>
              </button>
            </a>
          </div>
  )
}