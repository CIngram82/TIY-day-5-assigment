console.log("Hi everybody!");

/* Exercise 1
function addNumbers(numberA, numberB) {
  console.log(numberA + numberB)
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4
*/
/*Exercise 2
function yell(shout) {
    shout = shout.toUpperCase();
    console.log(shout);
    return shout;

}
let getLoud = "time to yell";
 yell(getLoud);

function yell10() { // there has got to be a better way to do this.
    yell(getLoud);
    yell(getLoud);
    yell(getLoud);
    yell(getLoud);
    yell(getLoud);
    yell(getLoud);
    yell(getLoud);
    yell(getLoud);
    yell(getLoud);
    yell(getLoud);

}
yell10();
*/

/* Exercise 3

function longest(a, b){

  if (a.length === b.length) {
    console.log("They are the same")
  } else if (a.length > b.length) {
    console.log('""' + a + '"" is longer!');
  } else if (a.length < b.length) {
    console.log('"' + b + '" is longer!');
}
}

let firstString = "this is 15 long JK much longer then 15 now";
let secondString = "this is even longer then that";

longest(firstString, secondString);
*/

// Exercise 4

function isVowel(letter){ //Can't think of a better way of doing this with out 10 if statments to check.
  console.log(letter);
  if (letter.length != 1){
    console.log("one letter only");
    return false;
  } else if (letter === "a"){
    return true;
  } else if (letter === "e"){
    return true;
  } else if (letter === "i"){
      return true;
  } else if (letter === "o"){
      return true;
  } else if (letter === "u"){
      return true
  } else if (letter === "A"){
      return true;
  } else if (letter === "E"){
      return true;
  } else if (letter === "I"){
      return true;
  } else if (letter === "O"){
      return true;
  } else if (letter === "U"){
      return true;
  } else {
    return false;
    console.log("false")
  }
}
let vowelMaybe = "a";

isVowel(vowelMaybe);
