<!-- ## Show the terminal output here.  -->

--1. Amelia Downs
--2. Bridgette Salcido 

sqlite3 my_database.db

CREATE TABLE patients (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name TEXT(20) NOT NULL, 
  species TEXT(20) NOT NULL, 
  owner_name TEXT(50) NOT NULL, 
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);


CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  patient_id INTEGER NOT NULL, 
  appt_date DATETIME NOT NULL, 
  provider TEXT(50) NOT NULL, 
  symptom TEXT(50) NOT NULL, 
  treatment TEXT(100), 
  created_at DATETIME NOT NULL, 
  updated_at DATETIME NOT NULL
);  
  
  
  
--.schema - looks good 

--CREATE TABLE appointments (
--  id INTEGER PRIMARY KEY AUTOINCREMENT, 
--  patient_id INTEGER NOT NULL, 
--  appt_date DATETIME NOT NULL, 
--  provider TEXT(50) NOT NULL, 
--  symptom TEXT(50) NOT NULL, 
--  treatment TEXT(100), 
--  created_at DATETIME NOT NULL, 
--  updated_at DATETIME NOT NULL
--);
--CREATE TABLE patients (
--  id INTEGER PRIMARY KEY AUTOINCREMENT, 
--  name TEXT(20) NOT NULL, 
--  species TEXT(20) NOT NULL, 
--  owner_name TEXT(50) NOT NULL, 
--  created_at DATETIME NOT NULL,
--  updated_at DATETIME NOT NULL
--);


--Want to add this in:
--
--  FOREIGN KEY(patient_id) REFERENCES patients(id)

ALTER TABLE appointments 
DROP COLUMN patient_id;
--Output: Error: near "DROP": syntax error


DROP TABLE appointments;

--input: 
CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  patient_id INTEGER NOT NULL, 
  FOREIGN KEY(patient_id) REFERENCES patients(id),
  appt_date DATETIME NOT NULL, 
  provider TEXT(50) NOT NULL, 
  symptom TEXT(50) NOT NULL, 
  treatment TEXT(100), 
  created_at DATETIME NOT NULL, 
  updated_at DATETIME NOT NULL
);  
  

--output: Error: near "appt_date": syntax error

--input: 
CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  patient_id FOREIGN KEY (id) REFERENCES patients(id),
  appt_date DATETIME NOT NULL, 
  provider TEXT(50) NOT NULL, 
  symptom TEXT(50) NOT NULL, 
  treatment TEXT(100), 
  created_at DATETIME NOT NULL, 
  updated_at DATETIME NOT NULL
); 

--output: Error: near "FOREIGN": syntax error

--input: 
CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  patient_id INTEGER NOT NULL, 
  appt_date DATETIME NOT NULL, 
  provider TEXT(50) NOT NULL, 
  symptom TEXT(50) NOT NULL, 
  treatment TEXT(100), 
  created_at DATETIME NOT NULL, 
  updated_at DATETIME NOT NULL
);  

ALTER TABLE appointments 
ADD FOREIGN KEY (patient_id) REFERENCES patients(id)

--Error: near "FOREIGN": syntax error

--Bridgette's Pets 

INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Fergie', 'K9', 'Bridgette', DATETIME('now'), DATETIME('now'));


INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Pubby', 'K9', 'Bridgette', DATETIME('now'), DATETIME('now'));


INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('China', 'K9', 'Bridgette', DATETIME('now'), DATETIME('now'));


INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Mickey', 'Feline', 'Bridgette', DATETIME('now'), DATETIME('now'));

INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Misty', 'Feline', 'Bridgette', DATETIME('now'), DATETIME('now'));

--AMELIA"S PETS

INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Esther', 'Main Coon', 'Amelia', DATETIME('now'), DATETIME('now'));

INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Stripes', 'Tom Cat', 'Amelia', DATETIME('now'), DATETIME('now'));

INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Beau Bunny', 'Bunny', 'Amelia', DATETIME('now'), DATETIME('now'));


INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Princess Amelia', 'Cat', 'Amelia', DATETIME('now'), DATETIME('now'));


INSERT INTO patients
(name, species, owner_name, created_at, updated_at)
VALUES
('Fat Louie', 'Cat', 'Amelia', DATETIME('now'), DATETIME('now'));
--INSERT INTO users 
--(first_name, last_name, email, created_at, updated_at)
--VALUES
--('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));


--input:
SELECT * FROM patients;

--output: 
--1|Esther|Main Coon|Amelia|2014-05-25 20:23:19|2014-05-25 20:23:19
--2|Stripes|Tom Cat|Amelia|2014-05-25 20:23:19|2014-05-25 20:23:19
--3|Beau Bunny|Bunny|Amelia|2014-05-25 20:23:19|2014-05-25 20:23:19
--4|Princess Amelia|Cat|Amelia|2014-05-25 20:23:19|2014-05-25 20:23:19
--5|Fat Louie|Cat|Amelia|2014-05-25 20:23:21|2014-05-25 20:23:21
--6|Fergie|K9|Bridgette|2014-05-25 20:24:00|2014-05-25 20:24:00
--7|Pubby|K9|Bridgette|2014-05-25 20:24:00|2014-05-25 20:24:00
--8|China|K9|Bridgette|2014-05-25 20:24:00|2014-05-25 20:24:00
--9|Mickey|Feline|Bridgette|2014-05-25 20:24:00|2014-05-25 20:24:00
--10|Misty|Feline|Bridgette|2014-05-25 20:24:01|2014-05-25 20:24:01


Amelia's output: 

id          name        species     owner_name  created_at           updated_at         
----------  ----------  ----------  ----------  -------------------  -------------------
1           Fergie      K9          Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
2           Pubby       K9          Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
3           China       K9          Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
4           Mickey      Feline      Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
5           Misty       Feline      Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
6           Esther      Main Coon   Amelia      2014-05-25 20:24:45  2014-05-25 20:24:45
7           Stripes     Tom Cat     Amelia      2014-05-25 20:24:45  2014-05-25 20:24:45
8           Beau Bunny  Bunny       Amelia      2014-05-25 20:24:45  2014-05-25 20:24:45
9           Princess A  Cat         Amelia      2014-05-25 20:24:45  2014-05-25 20:24:45
10          Fat Louie   Cat         Amelia      2014-05-25 20:24:46  2014-05-25 20:24:46


Bridgette's output:

id          name        species     owner_name  created_at           updated_at         
----------  ----------  ----------  ----------  -------------------  -------------------
1           Fergie      K9          Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
2           Pubby       K9          Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
3           China       K9          Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
4           Mickey      Feline      Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
5           Misty       Feline      Bridgette   2014-05-25 20:24:31  2014-05-25 20:24:31
6           Esther      Main Coon   Amelia      2014-05-25 20:24:45  2014-05-25 20:24:45
7           Stripes     Tom Cat     Amelia      2014-05-25 20:24:45  2014-05-25 20:24:45
8           Beau Bunny  Bunny       Amelia      2014-05-25 20:24:45  2014-05-25 20:24:45
9           Princess A  Cat         Amelia      2014-05-25 20:24:45  2014-05-25 20:24:45
10          Fat Louie   Cat         Amelia      2014-05-25 20:24:46  2014-05-25 20:24:46


I worked on the following with Kendall Carrey: 

1. Kendall Carey 
2. Bridgette Salcido 

-- input 

sqlite3 my_database.db 

CREATE TABLE albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  artist_id INTEGER NOT NULL,
  album_name TEXT(50) UNIQUE NOT NULL,
  hit_single VARCHAR(50) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);
CREATE TABLE artists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  artist_id INTEGER NOT NULL, 
  name TEXT(50) UNIQUE NOT NULL,
  members INTEGER(10) NOT NULL,
  genre TEXT(20) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);


--input 

.schema 


INSERT INTO artists 
(name, members, genre, created_at, updated_at)
VALUES
('Scott Jason Band', '1', 'Rock'n'Roll', DATETIME('now'), DATETIME('now'));

INSERT INTO artists 
(name, members, genre, created_at, updated_at)
VALUES
('Queens of the Stone Age', '3', 'Rock', DATETIME('now'), DATETIME('now'));

INSERT INTO artists 
(name, members, genre, created_at, updated_at)
VALUES
('Beatles', '4', 'Rock', DATETIME('now'), DATETIME('now'));

INSERT INTO artists 
(name, members, genre, created_at, updated_at)
VALUES
('Rage Against The Machine', '4', 'Rock', DATETIME('now'), DATETIME('now'));

INSERT INTO artists 
(name, members, genre, created_at, updated_at)
VALUES
('Amos Lee', '1', 'Folk', DATETIME('now'), DATETIME('now'));

INSERT INTO albums 
(artist_id, album_name, hit_single, created_at, updated_at)
VALUES
('Scott Jason Band', 'Portrait of Scott Jason', 'DBC is for me', DATETIME('now'), DATETIME('now'));

INSERT INTO albums 
(artist_id, album_name, hit_single, created_at, updated_at)
VALUES
('Queens of the Stone Age', 'Like Clockwork', 'If I had a tail', DATETIME('now'), DATETIME('now'));

INSERT INTO albums 
(artist_id, album_name, hit_single, created_at, updated_at)
VALUES
('Beatles', 'Abby Road', 'Something', DATETIME('now'), DATETIME('now'));

INSERT INTO albums 
(artist_id, album_name, hit_single, created_at, updated_at)
VALUES
('Rage Against The Machine', 'Rage Against The Machine', 'Killing in the Name', DATETIME('now'), DATETIME('now'));

INSERT INTO albums 
(artist_id, album_name, hit_single, created_at, updated_at)
VALUES
('Amos Lee', 'Amos Lee', 'Keep it Loose, Keep it Tight', DATETIME('now'), DATETIME('now'));


-- input 


SELECT name JOIN album_name FROM artists WHERE id = 1 

SELECT name FROM artists JOIN albums WHERE artist_id;  

SELECT * FROM artists INNER JOIN albums ON artists.name = albums.artist_id

SELECT name FROM artists JOIN albums WHERE album_name = "Abby Road"; 


-- Beatles - Abby Road 

SELECT name AND album_name FROM artists INNER JOIN albums ON artists.name = albums.artist_id;
