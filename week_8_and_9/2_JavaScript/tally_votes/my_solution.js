// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge [with: Greg White]

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

function addCount(position,name){
    if (!  voteCount[position].hasOwnProperty(name)){  //example  voteCount[President] does not have Bob yet,
        voteCount[position][name] = 0
    }
    voteCount[position][name] += 1 
} 


/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode

// 1) parse through the nested votes object and tally up the votes into the votecount structure
// 2) for each position in the votecount structure
        // find the max value
        // get the key that has that max value   #stuck here with function getKeyFromValue
        // this key is the winner 
        // assign this person to the officers structure


// __________________________________________
// Initial Solution

// Tally the votes in voteCount.
voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}


function addCount(position,name){
    if (!  voteCount[position].hasOwnProperty(name)){  //example  voteCount[President] does not have Bob yet,
        voteCount[position][name] = 0
    }
    voteCount[position][name] += 1 
} 



var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}


//start

// Tally the votes in voteCount.
voteCount = {
  president: {Bob: 1, Hermann:5},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

function getValues(obj){
    values = []
    for (key in obj) {
        values.push(obj[key]);
    }
    return values
}
    



function findMaxValue(){  //example  give it "president"
    //for name in VoteCount["president"]{
    //    console.log(VoteCount["president"][name])
    //}
    //values = Object.values(voteCount["president"]);
    values = getValues(voteCount["president"])
    maxValue = Math.max.apply(null,values)
    console.log(maxValue);
}

//return the key that contains the specified value
//for example voteCount["president"] has keys : "Bob" and "Herman" with values of 1 and 5
//getKeyFromValue(voteCount["president"],5) -> "Herman"
function getKeyFromValue(obj,target_value){
    keys = Object.keys(obj)
    console.log(keys)
    values = getValues(obj)
    console.log(values)
    key
    for (key in keys){
        
        value = obj[key]
        console.log(value)
        if (value == target_value){
            console.log(key)
            return key
        }
    }
    
}
    


for (voter in votes){
    //console.log("voter "+ voter)
    positions = votes[voter]  //object of alex's positions  ->{ president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" }
    
    for (position in positions){  //position = president first iteration
        //console.log("position "+ position)
        pick = votes[voter][position]   // votes["Alex"]["president"] -->  returns "BOB
        //console.log("pick "+ pick)   // pick bob
        addCount(position,pick)
    }
} 






// __________________________________________
// Refactored Solution

for(var position in officers) {
  //go through each vote to nominate a person for a position
  for(var vote in votes){
    //is the person already nominated?
    if(votes[vote][position] in voteCount[position]){
      //go into voteCount for the current position and add one to the value for the person nominated
      voteCount[position][votes[vote][position]] +=1;
    }
    else{
      //add them in as a key in the hash and give it the value of 1
      voteCount[position][votes[vote][position]] = 1;
    }
  }

//current max holds the highest vote count yet
  var currentMax = 0;
  var positionHolder = "";

  for(var contender in voteCount[position]){
    if(voteCount[position][contender] > currentMax){
      currentMax = voteCount[position][contender];
      positionHolder = contender;
    }
  }

  officers[position] = positionHolder;
}





// __________________________________________
// Reflection

// I sort of hate JS but, I think that may be because I don't have much 
// experience using it with HTML. I find I am always taking an approach to 
// solving using ruby methodology but, JS is limited in ways Ruby is not.

// I did the Initial Solution by myself and the final with Greg. I'm So 
// grateful that he was willing to guide me through things because I 
// feel really weak in this language. 

// I dislike writing the syntax but also think it looks kinda cool. 

// Need to move on for the day now...



// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)