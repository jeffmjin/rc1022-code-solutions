select "customers"."firstName" as "firstName",
       "customers"."lastName" as "lastName",
       sum("amount") as "totalAmount"
  from "customers"
  join "payments" using ("customerId")
  group by "customers"."customerId"
  order by "totalAmount" DESC;
