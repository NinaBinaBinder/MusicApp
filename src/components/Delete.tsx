"use client";

import { deleteAlbum, deleteSong } from "@/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteAlbum({ id }: { id: number }) {
  const router = useRouter();

  async function handleDelete() {
    await deleteAlbum(id);
    router.refresh();
    toast.success("delete successful uwu");
  }

  return (
    <button
      onClick={handleDelete}
      className="justify-start rounded hover:bg-red-600 text-xs hover:text-gray-50 h-7 w-16"
    >
      delete
    </button>
  );
}

export function DeleteSong({ id }: { id: number }) {
  const router = useRouter();

  async function handleDelete() {
    await deleteSong(id);
    router.refresh();
    toast.success("delete successful uwu");
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded hover:bg-red-600 text-xs hover:text-gray-50 h-7 w-16"
    >
      delete
    </button>
  );
}
