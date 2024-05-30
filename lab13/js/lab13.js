// index.js - purpose and description here
// Author: Avy Vargas
// Date: 05/29/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
//function myFunction(param1, param2) {
  // some code here
  // return results;
//}

for (let i = 1; i <= 200; i++) {

  let str = "";
  if (i % 3 == 0) {
    str += "𝐹𝒾𝓏𝓏 ";
  }
  if (i % 5 == 0) {
    str += "𝐵𝓊𝓏𝓏 ";
  }  
  if (i % 7 == 0) {
    str += "𝐵𝑜𝑜𝓂 "; if (i == 7) {
    str += "𝐵𝒶𝓃𝑔 ";
  } 
  }
  
  if (str == "") {
    console.log(i);
    $("#output").append("<p class='num'>" + i);
  } else {
    console.log(str + '!');
    $("#output").append("<p class='text'>" + str + '!');
  }
  
}