# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields

When I view my profile, there are fields such as username, email address, website, location, language, etc.There are many fields that fall under multiple tabs such as acount, security and privacy, password, etc. 

## Release 1: Tweet Fields
<!-- Identify the fields Twitter uses to represent/display a tweet. What are you required or allowed to enter? -->

This question is really unclear to me. I will attempt an answer: To represent/display a tweet, twitter uses data such as user handle, date, number of tweets. 

## Release 2: Explain the relationship
The relationship between `users` and `tweets` is: 

One to many because a tweet can only belong to one user and users make many tweets. 

## Release 3: Schema Design
[tweets](http://i.imgur.com/BX4fUdl)

## Release 4: SQL Statements

all the tweets for a certain user id

SELECT tweet FROM tweets JOIN users ON user_id = tweet_id WHERE user_id = 001 

the tweets for a certain user id that were made after last Wednesday (whenever last Wednesday was for you)

SELECT tweet FROM tweets JOIN users ON user_id = tweet_id WHERE user_id = 002 AND tweet_date BETWEEN '03/12/2014' AND '03/19/2014'

all the tweets associated with a given user's twitter handle

SELECT tweet FROM tweets JOIN users ON user_id = tweet_id WHERE user_handle = '@BridgeSays'


the twitter handle associated with a given tweet id

SELECT DISTINCT user_name FROM users JOIN tweets ON user_id = tweet_id WHERE tweet_id = 3

## Release 5: Reflection
<!-- Be sure to add your reflection here!!! -->

No idea if I did this right. The directions of this challenge are very confusing to me. I am really uncertain what more I could do with this exercise save create a mock database of my own that mimics the data fiels twitter uses and then pull information from the database and take pictures of it and display them here. I believe I understand SQLite as well as I'm supposed to at the moment and in terms of conceptual understanding am quite confident in what I have learned so far but, I think if I spent any more time working on this challenge, I'd run the risk of confusing myself and what I know might come unglued. I hope you consider recreating this exercise. Something tells me I'm not the only one who found 
it to be troubling. 