"use client";

import { addSong } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddSong({ albumId }: { albumId: number }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("0");

  const router = useRouter();

  async function handleAdd() {
    console.log(duration);
    if (name.length < 3) {
      toast.error("please enter valid name scur");
    } else {
      try {
        await addSong({ albumId, name, duration: duration });
      } catch (error) {
        console.error(error);
      }
    }
    router.refresh();
  }

  return (
    <form className="rounded m-3 bg-blue-200 p-3 w-1/2">
      <div className="grid grid-cols-2 rounded mb-2">
        <input
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          id="name"
          placeholder="song name"
          className="rounded m-2 p-2"
        />

        <div>
          <input
            onChange={(e) => setDuration(e.currentTarget.value)}
            type="range"
            id="duration"
            className="rounded m-2 p-2"
          />
          <label htmlFor="duration">{duration} min</label>
        </div>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="text-center m-auto p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600"
      >
        Add Song
      </button>
    </form>
  );
}
