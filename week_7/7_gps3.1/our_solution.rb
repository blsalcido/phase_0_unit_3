# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1. Bridgette Salcido 
# 2. Jen Tutu
 
# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to create a list of products to buy
# As a user, I want to be able to add items to the list
# As a user, I want to be able to cross off items from the list
# As a user, I want to see an updated list

 
# Pseudocode
#define a class called Grocery List 
#Create instance method add, take arguments for item and quantity
#Create instance method cross_off, take argument for item to remove
#Create instance method new_list, return updated list 
#
#
 
 
# Your fabulous code goes here....

class Item
  attr_reader :name
end

class GroceryList 
  attr_reader :items 
  
  def initialize
    @items={} 
  
  end
  
  def add_item(item, quantity)
    @items[item] = quantity 
  end 
  
  def cross_off(item)
    @items.delete(item)
  end
  
  def display
     @items.each { |k,v| puts k; puts v }
     raise ArgumentError.new("Your list has no items.") if @items.empty?
   end
   
end 



# DRIVER CODE GOES HERE.
shopping_list = GroceryList.new()
shopping_list.add_item("apples", 5)
p shopping_list.items["apples"] == 5
shopping_list.cross_off("apples") 
shopping_list.display  
