import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Arrows() {
  return (
    <div className="flex items-center gap-4">
            <button className="bg-black/40 rounded-full p-1 hover:bg-white/10">
              <ChevronLeft />
            </button>
            <button className="bg-black/40 rounded-full p-1 hover:bg-white/10">
              <ChevronRight/>
            </button>
          </div>
  )
}