# U3.W8-9: 


# I worked on this challenge [by myself].

# 2. Pseudocode



# 3. Initial Solution

def is_fibonacci?(i) 
  fib=[0,1]
    while fib.max <= i
      fib.length.times do |n|
      fib[0] = fib[n] + fib[n-1]
      end
    fib = fib.push(fib[0])
    end
  fib.include?(i)
end 
 


# 4. Refactored Solution




# 1. DRIVER TESTS GO BELOW THIS LINE

def assert
  raise "Assertion failed!" unless yield
end

assert {is_fibonacci?(144) == true}      
assert {is_fibonacci?(1596) == false}
assert {is_fibonacci?(610) == true}
assert {is_fibonacci?(5000) == false}
assert {is_fibonacci?(6600) == true}
assert {is_fibonacci?(6765) == true}




# 5. Reflection 

# I was supposed to pair with someone to complete the refactor portion of this challenge but 
# they had to cancel and we weren't able to reschedule. I really like while loops and enjoyed
# the opportunity to use one here. Whenever I do get to pair on this, I want to try to solve
# it recursively. I would try now but have to move on to other challenges.  

