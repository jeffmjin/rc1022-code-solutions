select "line1",
       "city"."name" as "cities",
       "district",
       "countries" as "country"
  from "cities" as "city"
  join "addresses" using ("cityId")
  join "countries" using ("countryId");
