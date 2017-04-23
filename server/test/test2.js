var arrayTest = [1,2,3]
console.log(arrayTest)
for(var prop in arrayTest){
  console.log(arrayTest[prop]);
}

var animal = new Object();
animal.name = "john"
animal.age = 22
console.log(animal);

var prius = {
  name: "prius",
  miles: 22000,
  color: "blue"
}
console.log(prius);

function multiply(num1, num2){
  return num1*num2;
}
console.log(multiply(6,9));

function justKevin(){
  return "Kevin";
}

var name = justKevin;
var name2 = justKevin();
console.log(name + name2);

var addition = require('./functionFiles.js');
console.log(addition(1, 3));

/* This doesn't work?
var additionImport = require('./functionFiles.js');
var addition = additionImport();
console.log(addition(1, 3));
*/

//This is to test if I can put a function in a variable.
var name = function justName(name){
  return name;
}
var nameEnhance = name;
//var nameEnhance = name(); doesn't work because I'm calling the name function,
// but I'm not passing any parameters so it's getting undefined.
console.log(nameEnhance("james"));

//Look at constructions
//Create a function that returns an object.
//Practice with module.exports + require();
//Play around with functions that pass functions in the parameters.


function score(marks){
  if(marks > 90){
      console.log("AA");
  }
  else if(marks > 80 && marks <= 90){
      console.log("AB");
  }
  else if(marks > 70 && marks <= 80){
      console.log("BB");
  }else if(marks > 60 && marks <= 70){
      console.log("BC");
  }else if(marks > 50 && marks <= 60){
      console.log("CC");
  }else if(marks > 40 && marks <= 50){
      console.log("CD");
  }else if(marks > 30 && marks <= 40){
      console.log("DD");
  }
  else{
      console.log("FF");
  }
}

score(76);
