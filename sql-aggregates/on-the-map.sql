select count(*) as "numberOfCities",
       "countries"."name" as "name"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
