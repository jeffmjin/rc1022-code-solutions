select "releaseYear",
       "genres"."name" as "genres"
  from "genres"
  join "filmGenre" using ("genreId")
  join "films" using ("filmId")
  where "title" = 'Boogie Amelie';
