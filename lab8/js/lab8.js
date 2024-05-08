// index.js - purpose and description here
// Author: Avy Vargas
// Date: 05/07/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
//function myFunction(param1, param2) {
  // some code here
  // return results;
//}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

function wompwomp(x) {
  //var results = x/2 
  return (x%2==0);
}

wegotanarraylol = [2016, 28, 33, 10, 21, 98, 1984, 1917, ];
console.log("check out this sick array ", wegotanarraylol);

var result = wegotanarraylol.map(wompwomp);
//shold be [true, true, false, true, true, false, true, true, false]
console.log("let's go and see if this array is even. The results are in and they are: ", result);
console.log("kinda reminds me of two truths and a lie lol");

var result = wegotanarraylol.map(function(x) {
  return x*2;
})
//should be[]
console.log("Okii now lets see how this cool array looks like if we double it ", result);
console.log("cool, cool... uhhh.... should we double it or take it lol(nervous laugh)");

 // Your map results data
 var mapResults = "Your map results here", wegotanarraylol;
 
 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults,);