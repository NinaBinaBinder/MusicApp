"use client";

import { addAlbum } from "@/actions";
import { Genre, genreEnum } from "@/db/schema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddAlbum() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const genres = genreEnum.enumValues;
  const router = useRouter();

  async function handleAdd() {
    if (title.length < 3 || artist.length < 3) {
      toast.error(
        "please enter valid album, inputs cannot be shorter than 3 lol"
      );
    } else {
      try {
        await addAlbum({ title, artist, genre });
      } catch (error) {
        console.error(error);
      }
    }
    router.refresh();
  }

  return (
    <form className="rounded border m-3 bg-blue-200 p-3 w-1/2">
      <input
        onChange={(e) => setTitle(e.currentTarget.value)}
        type="text"
        id="title"
        placeholder="title"
        className="rounded m-2 p-2"
      />
      <input
        onChange={(e) => setArtist(e.currentTarget.value)}
        type="text"
        placeholder="artist"
        id="artist"
        className="rounded m-2 p-2"
      />
      <select className="rounded m-2 p-2"
      onChange={(e) => setGenre(e.currentTarget.value)} value={genre}>
        {genres.map((genre: string) => (
          <option key={genre.indexOf(genre)}>{genre}</option>
        ))}
      </select>
      <button type="button" onClick={handleAdd}
      className="text-center m-auto p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600">
        add Album
      </button>
    </form>
  );
}
