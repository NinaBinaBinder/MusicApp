
import { getAlbums } from "@/actions";
import AddAlbum from "@/components/AddAlbum";
import { AlbumCard } from "@/components/Card";

 export const dynamic = "force-dynamic"
 
export default async function Home() {

 

  const albums = await getAlbums()
  return (
    <main className="items-center justify-between p-24">
      <h1 className="font-bold text-4xl text-center m-10">Music Library</h1>
      {albums.map((album)=>
      <AlbumCard album={album} key={album.id}/>

      )}
      <AddAlbum/>
     
    </main>
  );
}
