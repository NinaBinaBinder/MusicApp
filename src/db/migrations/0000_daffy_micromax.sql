DO $$ BEGIN
 CREATE TYPE "genre" AS ENUM('punk', 'rock', 'indie');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "albumsTable" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(100) NOT NULL,
	"artist" varchar(100) NOT NULL,
	"genre" "genre"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "songsTable" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"duration" numeric,
	"albumId" serial NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "songsTable" ADD CONSTRAINT "songsTable_albumId_albumsTable_id_fk" FOREIGN KEY ("albumId") REFERENCES "albumsTable"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
