// Desafio 1
function compareTrue(value1, value2) {
  // I declared the 'value1' and 'value2' as a compareTrue parameter
   if (value1 && value2 === true) {
    return true;
   } else {
    return false;
    }
  }
  //Here i used a condition if/else to compare 'value1' and
  //'value2' as a true bollean value. So if its true then 
  //return true and if not return false.

// Desafio 2
function calcArea(base, height) {
  //Here I set base and height as calcArea parameter.
  let totalArea = ((base * height)/2);
  //Here I created a new variable called 'totalArea' to have base  
  // times height divided by two to obtain the triangle area.
  return totalArea;
 //console.log(totalArea);
 }
 //calcArea(10,50)

// Desafio 3
function splitSentence(phrase){
// Here I addedd a parameter called 'phrase' to a splitSencente function
//console.log(string.split (' '));
return phrase.split (' ');
}
// Here I added a return using the method split to have a return with
// new array separated with comma and space between each word from
// parameter phrase. 
//splitSentence('go trybe')
// Here I added a value to phrase parameter.
  


// Desafio 4
function concatName(emptyArray) {
// I added a value called emptyArray to function concatName parameter.  
  let fisrtLast = emptyArray[emptyArray.length -1] + ', ' + emptyArray[0];
  // Next i created a variable called fisrtLast to have the last 
  // emptyArray item plus one string with comma and space plus the
  // first item from emptyArray. 
  // console.log(fisrtLast);
  return fisrtLast;
}  
// concatName(['Frodo', 'Gandalf', 'Boromir', 'Legolas','Sam'])

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
