"use server"

import { eq } from "drizzle-orm"
import { db } from "./db/connect"
import { Genre, albumsTable, songsTable } from "./db/schema"

export async function getAlbums(){
    return await db.select().from(albumsTable)
}

export async function getSongs(id:number){
    return await db.select().from(songsTable).where(eq(songsTable.albumId, id))

}

export async function addAlbum({title, artist, genre}:{title: string, artist:string, genre:string}){
   await db.insert(albumsTable).values({title, artist, genre})
}

export async function editAlbum({title, artist, genre}:{title: string, artist:string, genre:string}){
    await db.update(albumsTable).set({title, artist, genre})
}

export async function addSong({albumId, name, duration}: {albumId: number, name: string, duration:string}){
    await db.insert(songsTable).values({albumId, name, duration})
}

export async function deleteAlbum(id:number){
    await db.delete(songsTable).where(eq(songsTable.albumId, id))
    await db.delete(albumsTable).where(eq(albumsTable.id, id))
}

export async function deleteSong(id:number){
    await db.delete(songsTable).where(eq(songsTable.id, id))
}