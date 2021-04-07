# MySQL file hand coded by Janifer Cheng March 2021 as part of the coursework from "The Ultimate MySQL Bootcamp"  taught by Colt Steele on Udemy.  Permission for publication of this work is given by the instructor to Janifer Cheng for portfolio use.



create table users(
email varchar(255) primary key,
created_at timestamp default now()
);



# select 
# CASE
# when email like "%@gmail%" then "gmail"
# when email like "%@yahoo%" then "yahoo"
# when email like "%@hotmail%" then "hotmail"
# else "other"
# end as provider,
# count (*) as total_users
# from total_users
# group by provider
# order by total_users desc;



