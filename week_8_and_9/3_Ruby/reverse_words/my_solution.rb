# U3.W8-9: Reverse Words


# I worked on this challenge [by myself].

# 2. Pseudocode

# Define method #reverse_each_word
# #reverse_each_word should take a sentence string as argument
# convert sentence string argument to an array
# call build in methods to access each array element and reverse their order



# 3. Initial Solution

# def reverse_each_word(sentence)
  
#   reversed_sentence = [] 
   
#   reversed_sentence << sentence

#   reversed_sentence.each_with_index do |element| element.reverse!
#   end 
 
# end

 


# 4. Refactored Solution


def reverse_each_word(sentence)
  
  reversed_words = []
  reversed_words << sentence.reverse
  


end



# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

puts reverse_each_word("Will the real Slim Shady please stand up?")


# def assert 
#   raise "Assertion Failed" unless yield 
# end 

# assert {reverse_each_word("Will the real slim shady please stand up")}  



# 5. Reflection 

# This was slightly trickier than I thought it would be. In my initial solution I kept getting 
# "pu dnats esaelp ydahs mils laer eht lliW" as my output. That's almost right except I didn't 
# mean for the order of the entire array to be swapped; just the elements. 

# I also tried...


# def reverse_each_word(sentence)
#   word = ""
#   reversed_words = sentence.each_char.to_a
#   reversed_words.size.times{word << reversed_words.pop}
#   word
# end   

# but got the same output.

# The assert statements were troubling for this exercise as well and I think I want to have a 
# brief pair session to cover this just to gain a little insight on how to do this properly in
# this situation. 


