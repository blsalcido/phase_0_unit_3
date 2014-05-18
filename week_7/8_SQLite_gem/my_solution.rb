# U3.W7: BONUS Using the SQLite Gem

# I worked on this challenge with 
# 1. Amelia Downs
# 2. Bridgette Salcido 

# to login to the db: sqlite3 congress_poll_results.db 

require 'sqlite3'


$db = SQLite3::Database.open "congress_poll_results.db"


def print_arizona_reps
  puts "AZ REPRESENTATIVES"
  az_reps = $db.execute("SELECT name FROM congress_members WHERE location = 'AZ'")
  az_reps.each { |rep| puts rep }
end

def print_longest_serving_reps(minimum_years)  #sorry guys, oracle needs me, i didn't finish this!
  puts "LONGEST SERVING REPRESENTATIVES"
  longest_serving =  $db.execute("SELECT name, years_in_congress FROM congress_members WHERE years_in_congress > #{minimum_years}")
  longest_serving.each { |rep, years| puts "#{rep} - #{years} years" }
end

def print_lowest_grade_level_speakers(grade_level)
  puts "LOWEST GRADE LEVEL SPEAKERS (LOWER THAN GRADE #{grade_level})"
  lowest_level = $db.execute("SELECT name FROM congress_members WHERE grade_current < #{grade_level}")
  puts lowest_level
end

def print_state_reps(*states)
  states.each do |state|
    puts "REPRESENTATIVES FROM #{state}" 
    state_rep = $db.execute("SELECT name FROM congress_members WHERE location = '#{state}'")
    puts state_rep
    print_separator
  end
end

def print_separator
  puts 
  puts "------------------------------------------------------------------------------"
  puts 
end



print_arizona_reps

print_separator

print_longest_serving_reps(35)
# TODO - Print out the number of years served as well as the name of the longest running reps
# output should look like:  Rep. C. W. Bill Young - 41 years

print_separator
print_lowest_grade_level_speakers(8)
print_separator
# TODO - Need to be able to pass the grade level as an argument, look in schema for "grade_current" column

# TODO - Make a method to print the following states representatives as well:
# (New Jersey, New York, Maine, Florida, and Alaska)
print_state_reps("NJ", "NY", "ME", "FL","AK")

# SELECT name, location FROM congress_members

##### BONUS #######
# TODO (bonus) - Stop SQL injection attacks!  Statmaster learned that interpolation of variables in SQL statements leaves some security vulnerabilities.  Use the google to figure out how to protect from this type of attack.

# TODO (bonus)
# Create a listing of all of the Politicians and the number of votes they recieved
# output should look like:  Sen. John McCain - 7,323 votes (This is an example, yours will not return this value, it should just 
#    have a similar format)
# Create a listing of each Politician and the voter that voted for them
# output should include the senators name, then a long list of voters separated by a comma
#
# * you'll need to do some join statements to complete these last queries!


# REFLECTION- Include your reflection as a comment below.
# How does the sqlite3 gem work?  What is the variable `$db` holding?  
# Try to use your knowledge of ruby and OO to decipher this as well as h
# ow the `#execute` method works.  Take a stab at explaining the line 
# `$db.execute("SELECT name FROM congress_members WHERE years_in_congress 
#   > #{minimum_years}")`.  Try to explain this as clearly as possible for 
# your fellow students.  
# If you're having trouble, find someone to pair on this explanation with you.

# Attempting to put it in my own words, $db is a variable holding a command that will open the Database that
# the rest of this program will use. The execute method is called on the $db variable and tells it to run 
# the statement that follows in parenthesis. 

# I had a lot of fun pairing on this with my partner. It was really cool seeing how SQL can be used with ruby 
# and that's not something that either of us had seen before. I was reluctant to do this challenge at first but, 
# decided to recommend it to my pair for our session and I'm really glad I did because it wasn't so bad after all! 
# We worked on this until each of us had to stop. Overall I'm really happy with how this challenge went. 