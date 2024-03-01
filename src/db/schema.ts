import { decimal, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const genreEnum = pgEnum("genre", ["punk", "rock", "indie"]);
export type Genre = "punk" | "rock" | "indie";

export const albumsTable = pgTable("albumsTable", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  artist: varchar("artist", { length: 100 }).notNull(),
  genre: varchar("genre").notNull(),
});
export type Album = typeof albumsTable.$inferSelect;

export const songsTable = pgTable("songsTable", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  duration: varchar("duration"),
  albumId: serial("albumId").references(() => albumsTable.id),
});

export type Song = typeof songsTable.$inferSelect;
