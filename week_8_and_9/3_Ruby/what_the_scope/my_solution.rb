# U3.W8-9: What the Scope


# I worked on this challenge [by myself].

# 1. What are the problems in the error messages?



# 2. Original Code

$var_1 = 22   
 
class Person
  @@var_2        
  VAR_6 = "Ruby" 
                 
  attr_reader :var_3, :var_4   
 
  def initialize(var_5 = VAR_6)  
    @var_3="Law of Demeter"      
  end
 
  def do_stuff(var_7=[1,2,3])
    var_7.each do |var_8|
      var_9 += var_8 + 2
    end
  end
end

# 3. Modified Code (with scope identified as comments)

$var_1 = 22   # Global variable. 
 
class Person
  @@var_2        # Double instance variable? Why are there two @ signs? Can be seen throughout the class, not outside of the class.
  VAR_6 = "Ruby" # Looks like a local variable but, I don't know if VAR_6 is a Ruby object with special capabilities. ## Look this up.
                 # I've never heard of "class variables but, I would assume that's what VAR_6 is."
  attr_reader :var_3, :var_4  # Instance variables. 
 
  def initialize(var_5 = VAR_6)  # The parameter var_5 is pointing to the variable VAR-6 
    @var_3="Law of Demeter"      # Instance variable. This one is seen by all methods in the class. 
  end
 
  def do_stuff(var_7=[1,2,3])    # Local variable. This variable can only be seen by the method #do_stuff. 
    var_7.each do |var_8|        # var_7 is a loal variable. var_8 is a placeholder/counter. 
      var_9 += var_8 + 2         # Local variable. Can only be seen by this method. Is pointing to the result of var_8 + 2.
    end
  end
end



# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

# def assert 
#   raise "Argument Error" unless yeild 
# end  

guy = Person.new

puts guy.do_stuff

# 5. Reflection 

# 
# 
# 
# 
# 
# 
# 
# 

