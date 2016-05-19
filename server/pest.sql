--1. create owners table
CREATE TABLE owners (
 id SERIAL PRIMARY KEY,
 first_name varchar(25),
 last_name varchar(25)
);



--2. create pets table
CREATE TABLE pets (
 id SERIAL PRIMARY KEY,
 pet_name varchar(25),
 breed varchar(25),
 color varchar(25),
 owners_id integer REFERENCES owners
);

--3. create owners_pets table
CREATE TABLE owners_pets (
    owners_id integer NOT NULL REFERENCES owners,
    pets_id integer NOT NULL REFERENCES pets,
    PRIMARY KEY (owners_id, pets_id)
);
