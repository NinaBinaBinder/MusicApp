import { getAlbums, getSongs } from "@/actions";
import AddSong from "@/components/AddSong";
import { SongCard } from "@/components/Card";
import EditAlbum from "@/components/EditAlbum";
import { redirect } from "next/navigation";



export type AlbumPageParams = {
  params: { albumId: string };
};

export const dynamic = "force-dynamic"

export default async function albumPage({
  params: { albumId },
}: AlbumPageParams) {
  const id = Number(albumId);

  const albums = await getAlbums();
  const album = albums.find((album) => album.id === id);

  if (album === undefined) {
    redirect("/album/error");
  }
const songs = await getSongs(id)

  return (
    <div className="m-10 my-5">
      <p className="font-bold text-4xl text-center my-10 m-10">{album.title}</p>
      <div className="m-3 p-3 border border-blue-100">
      <p className="p-5">written by {album.artist}</p>
      <p className="p-5">genre: {album.genre}</p>
      </div>
      <EditAlbum album={album}></EditAlbum>
      <div>{songs.map((song)=>
      <SongCard song={song} key={song.id}/>)}</div>
      <AddSong albumId={id}></AddSong>
    </div>
  );
}
