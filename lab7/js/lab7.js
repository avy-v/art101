// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

//function getNameAndSort() {
	//const userName = window.promt("what is your name?");
  //return userName.split('').sort('').join('');
//}

//console.log(getNameAndSort());

function sortUserName() {
  //prompt to ask for user's name
  var userName = window.prompt("Hi. Please tell me your name so can fix it lol.");
  //reads user's name? 
  console.log("userName = ", userName);
  //splits the user's name from string to array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);
  //sorts the user's name which is now an array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort= ", nameArraySort);
  //array goes back to being a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted= ", nameSorted);
  return nameSorted;
}

//
document.writeln("Oh hey, guess what. You know that name you gave me or your name ig. Yeah i fixed it.",
  sortUserName(), "</br>");