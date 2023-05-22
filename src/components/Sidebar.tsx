import { HomeIcon, Library, Search } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-6">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Guitar Playlist
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My Playlist #12
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Aniver Funk
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Dance Musics
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Believe in God
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Trip Songs
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Best of NY
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Rap Nacional
        </a>
      </nav>
    </aside>
  );
};
