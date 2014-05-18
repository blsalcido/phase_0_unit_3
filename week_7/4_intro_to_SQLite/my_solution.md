# U3.W7: Intro to SQLite

## Release 0: Create a dummy database

<!-- paste your terminal output here -->

## Release 1: Insert Data 
sqlite> CREATE TABLE users (
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   first_name VARCHAR(64) NOT NULL,
   ...>   last_name  VARCHAR(64) NOT NULL,
   ...>   email VARCHAR(128) UNIQUE NOT NULL,
   ...>   created_at DATETIME NOT NULL,
   ...>   updated_at DATETIME NOT NULL
   ...> );
sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at)
   ...> VALUES
   ...> ('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));
sqlite> SELECT * FROM users
   ...> ;
id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 12:31:39  2014-05-18 12:31:39
sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at)
   ...> VALUES
   ...> ('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));
Error: column email is not unique
sqlite> 


## Release 2: Multi-line commands

sqlite> CREATE TABLE users (
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   first_name VARCHAR(64) NOT NULL,
   ...>   last_name  VARCHAR(64) NOT NULL,
   ...>   email VARCHAR(128) UNIQUE NOT NULL,
   ...>   created_at DATETIME NOT NULL,
   ...>   updated_at DATETIME NOT NULL
   ...> );
sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at)
   ...> VALUES
   ...> ('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));
sqlite> SELECT * FROM users
   ...> ;
id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 12:31:39  2014-05-18 12:31:39
sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at)
   ...> VALUES
   ...> ('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));
Error: column email is not unique
sqlite> 


## Release 3: Add a column

Error: column email is not unique
sqlite> ALTER TABLE users ADD COLUMN Nicknames VARCHAR(64);
sqlite> 

## Release 4: Change a value

sqlite> UPDATE users SET Nicknames="Kimchee" WHERE id=1;
sqlite> SELECT * FROM users
   ...> ;
id          first_name  last_name   email                  created_at           updated_at           Nicknames 
----------  ----------  ----------  ---------------------  -------------------  -------------------  ----------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 12:31:39  2014-05-18 12:31:39  Kimchee   
sqlite> 
sqlite> UPDATE users SET Nicknames="Ninja Coder" WHERE id=1;
sqlite> SELECT * FROM users
   ...> ;
id          first_name  last_name   email                  created_at           updated_at           Nicknames  
----------  ----------  ----------  ---------------------  -------------------  -------------------  -----------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 12:31:39  2014-05-18 12:31:39  Ninja Coder
sqlite> 


## Release 5: Reflect
<!-- Add your reflection here -->

This was incredibly simple, so much so that I feel a bit lost for words. Hopefully that's not an indication that I am over simplifying things. Some of my pairs this week have seemed really surprised (shocked, actually) when I say I like SQL. Not sure why, it's pretty straight forward to me...OR I am actually completely in the dark and don't even realize it....hmm...