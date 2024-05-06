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
  var userName = window.prompt("𝐻𝒾. 𝒫𝓁𝑒𝒶𝓈𝑒 𝓉𝑒𝓁𝓁 𝓂𝑒 𝓎𝑜𝓊𝓇 𝓃𝒶𝓂𝑒 𝓈𝑜 𝒸𝒶𝓃 𝒻𝒾𝓍 𝒾𝓉 𝓁𝑜𝓁.");
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
document.writeln("𝒪𝒽 𝒽𝑒𝓎, 𝑔𝓊𝑒𝓈𝓈 𝓌𝒽𝒶𝓉. 𝒴𝑜𝓊 𝓀𝓃𝑜𝓌 𝓉𝒽𝒶𝓉 𝓃𝒶𝓂𝑒 𝓎𝑜𝓊 𝑔𝒶𝓋𝑒 𝓂𝑒 𝑜𝓇 𝓎𝑜𝓊𝓇 𝑜𝓁𝒹 𝓃𝒶𝓂𝑒 𝒾𝑔. 𝒴𝑒𝒶𝒽 𝐼 𝒻𝒾𝓍𝑒𝒹 𝒾𝓉, 𝒽𝑒𝓇𝑒 𝒾𝓉 𝒾𝓈. 𝒴𝑜𝓊𝓇 𝓃𝑒𝓌 𝓃𝒶𝓂𝑒 𝒾𝓈",
  sortUserName(), "</br>");