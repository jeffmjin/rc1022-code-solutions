select "genres"."name" as "nameOfGenres",
       count(*) as "numberOfFilms"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "firstName" = 'Lisa'
     and "lastName" = 'Monroe'
  group by "genres"."name";
