// Desafio 1
function compareTrue(value1, value2) {
  // I declared the 'value1' and 'value2' as a compareTrue parameter
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}
// Here i used a condition if/else to compare 'value1' and
// 'value2' as a true bollean value. So if its true then
// return true and if not return false.

// Desafio 2
function calcArea(base, height) {
  // Here I set base and height as calcArea parameter.
  let totalArea = ((base * height) / 2);
  // Here I created a new variable called 'totalArea' to have base
  // times height divided by two to obtain the triangle area.
  return totalArea;
  // console.log(totalArea);
}
// calcArea(10,50)

// Desafio 3
function splitSentence(phrase) {
// Here I addedd a parameter called 'phrase' to a splitSencente function
// console.log(string.split (' '));
  return phrase.split(' ');
}
// Here I added a return using the method split to have a return with
// new array separated with comma and space between each word from
// parameter phrase.
// splitSentence('go trybe')
// Here I added a value to phrase parameter.

// Desafio 4
function concatName(emptyArray) {
// I added a value called emptyArray to function concatName parameter.
  let fisrtLast = `${emptyArray[emptyArray.length - 1]}, ${emptyArray[0]}`;
  // Next i created a variable called fisrtLast to have the last
  // emptyArray item plus one string with comma and space plus the
  // first item from emptyArray.
  // console.log(fisrtLast);
  return fisrtLast;
}
// concatName(['Frodo', 'Gandalf', 'Boromir', 'Legolas','Sam'])

// Desafio 5
function footballPoints(win, tie) {
  // added win and tie as a parameters of footnallPoints function
  let botafogoWin = win * 3;
  let botafogoTie = tie;
  let allPoints = botafogoWin + botafogoTie;
  // created 03 varaibles. First one to add itself 3 points for each
  // game won. Second one to add itself 1 point for each game tied.
  // And the last one to obtain the total game season points.
  return allPoints;
  // console.log(allPoints);
}
// footballPoints (14,8)

// Desafio 6
function highestCount(array) {
  let highestNumber = Math.max(...array);
  // Here I created a new variable using the Math.max tool that will
  // allow me to have the largest number from 0 to max given at
  // parameter array. Next i used the spread operator plus array to have
  // all those numbers that will be at parameter array.
  let counting = 0;
  // Here I created a new valiable called counting to obtain how many
  // times the largest number on parameter array will appear.
  for (let index = 0; index < array.length; index += 1) {
  // Here i created a loop to run into a parameter array.
    if (highestNumber === array[index]) {
      // Condition if to determine if function highestCount is equal to
      // parameter array [index] so add to variable counting how many times
      // will appears.
      counting++;
    }
  }
  return counting;
}

// console.log(highestCount ([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount ([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance2 > distance1) {
    return 'cat1';
  } if (distance1 > distance2) {
    return 'cat2';
  } if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let reserveArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
      reserveArray.push('fizzBuzz');
    } else if (array[index] % 3 == 0) {
      reserveArray.push('fizz');
    } else if (array[index] % 5 == 0) {
      reserveArray.push('buzz');
    } else {
      reserveArray.push('bug!');
    }
  } return reserveArray;
}
// console.log(fizzBuzz (2, 15, 7, 9, 45))
// console.log(fizzBuzz (3, 5, 33, 55, 34, 65, 76))

// Desafio 9
function encode(text) {
  // seu código aqui
  let encodedText = text
    .replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return encodedText;
}
function decode(text) {
  // seu código aqui
  let decodedText = text
    .replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return decodedText;
}

// Desafio 10
function techList(array, string) {
// Here I added to techList function two parameters, array and string.
  let list = [];
  // I created a variable with empty array to receive future values.
  array = array.sort();
  // Here I assigned parameter array to array.sort() to have the future
  // values to be added organized as requested.

  if (array.length > 0) {
    // Here I used a condition if to know if the parameter array length is
    // greater than 0. If so it wil proceed for the next line.
    for (let index = 0; index < array.length; index += 1) {
      // Here I created a loop with for to obtain all the items that are
      // included on parameter array.
      let object = {
        tech: array[index],
        name: string,
        // Here I created a new variable called object with two new objects.
        // The fisrt property is "tech" and the property value will be the
        // paremeter array[index] because wee need to know all value that
        // will be added to array parameter to be printed each one in loop.
        // The second property is "name" and the property value will be the
        // parameter string because we need to know which "tech" belongs to.
      };
      list.push(object);
      // Here I added to variable list using .push all those properties
      // that i created on varaible object.
    }
  } else {
    return 'Vazio!';
    // In case that we dont have any value in parameter array so return
    // with a string "Vazio!" that means "Empty!"
  }
  return list;
}

// let list = (techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
// console.log(list);

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
