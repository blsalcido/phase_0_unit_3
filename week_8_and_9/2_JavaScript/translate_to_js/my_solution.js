// U3.W8-9: Challenge you're converting


// I worked on this challenge with Bridgette Salcido/Greg White


// 3. Initial Solution
// var rectangle = {
//   create: function(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// rectangle.area_calc = function(){
//     this.area = this.height * this.width;
//   };

// rectangle.perimeter_calc = function() {
//   this.perimeter = this.width + this.height + this.width + this.height;
//   };
  
// rectangle.diagonal_calc = function() {
//   a_squared = Math.pow(this.width,2) + Math.pow(this.height,2);
//   this.diagonal = Math.sqrt(a_squared);
// };

// rectangle.square = function() { 
//   this.height == this.width;
// };




// var square = {
//   create: function(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// square.area_calc = function(){
//     this.area = this.height * this.width;
//   };

// square.perimeter_calc = function() {
//   this.perimeter = this.width + this.height + this.width + this.height;
//   };
  
// square.diagonal_calc = function() {
//   a_squared = Math.pow(this.width,2) + Math.pow(this.height,2);
//   this.diagonal = Math.sqrt(a_squared);
// };

// square.square_calc = function() { 
//   return this.height == this.width;
// };


// 4. Refactored Solution

var rectangle = {
  create: function(height, width) {
    this.height = height;
    this.width = width;
  }
};

rectangle.area_calc = function(){
    this.area = this.height * this.width;
  };

rectangle.perimeter_calc = function() {
  this.perimeter = 2*(this.width + this.height);
  };
  
rectangle.diagonal_calc = function() {
  a_squared = Math.pow(this.width,2) + Math.pow(this.height,2);
  this.diagonal = Math.sqrt(a_squared);
};

rectangle.square = function() { 
  this.height == this.width;
};




var square = {
  create: function(height, width) {
    this.height = height;
    this.width = width;
  }
};

square.area_calc = function(){
    this.area = this.height * this.width;
  };

square.perimeter_calc = function() {
  this.perimeter = 2*(this.width + this.height);
  };
  
square.diagonal_calc = function() {
  a_squared = Math.pow(this.width,2) + Math.pow(this.height,2);
  this.diagonal = Math.sqrt(a_squared);
};

square.square_calc = function() { 
  return this.height == this.width;
};




// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
rectangle.create(10, 20);
square.create(20, 20);

console.log( "Area Tests");
console.log( "returns the correct area of a rectangle" );
rectangle.area_calc();
console.log(rectangle.area == 200);

console.log("returns the correct area of a square");
square.area_calc();
console.log( square.area == 400);


console.log("Perimeter Tests");
console.log("returns the correct perimeter of a rectangle");
rectangle.perimeter_calc();
console.log(rectangle.perimeter == 60);

console.log("returns the correct perimeter of a square");
square.perimeter_calc();
console.log(square.perimeter == 80);


console.log("Diagonal Tests");

console.log("returns the correct diagonal of a rectangle");
rectangle.diagonal_calc();
console.log(rectangle.diagonal == 22.360679774997898);

console.log("returns the correct diagonal of a square");
square.diagonal_calc();
console.log(square.diagonal == 28.284271247461902);



console.log("Square? Tests");
console.log("returns false for a rectangle");
console.log(!rectangle.square());

console.log("returns true for a square");
console.log(square.square_calc());


// 5. Reflection 


// This was substantially easier for me to grasp than the first JS challenge I did
// this week; the tally_votes challenge. I had lots of fun working with my partner 
// and felt like we were able to translate things seamlessly. My knowledge is much 
// more limited than his so, it was helpful having him there to be watchful of small
// errors I was making. 