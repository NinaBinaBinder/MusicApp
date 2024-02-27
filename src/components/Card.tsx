"use client";
import { Album, Song } from "@/db/schema";
import { DeleteAlbum, DeleteSong } from "./Delete";
import Link from "next/link";

export function AlbumCard({ album }: { album: Album }) {
  return (
    <div className="flex flex-col rounded border m-3 hover:bg-blue-200 p-3 w-1/2">
      <DeleteAlbum id={album.id} />
      <Link className="font-bold text-xl" href={`./album/${album.id}`}>
        {album.title}
      </Link>


      <p>by {album.artist}</p>
      <p>{album.genre}</p>
    </div>
  );
}

export function SongCard({ song }: { song: Song }) {
  return (
    <div className="rounded border m-3 hover:bg-blue-200 p-3 ">
      <DeleteSong id={song.id} />
      <p className="font-bold">{song.name}</p>
      <p>{song.duration} min long</p>
    </div>
  );
}
