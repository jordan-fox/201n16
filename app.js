'use strict';

var userName = prompt('Hello, what is your name?');
var correctAnswers = 0;
// console.log('User Name: ' + userName);

alert(userName + ' welcome to my page!');


// FIRST QUESTION


var whereBorn = prompt('Was I born in Seattle?');
whereBorn = whereBorn.toLowerCase();
// console.log(userName + ' answered ' + whereBorn + ' to if I was born in Seattle.');

if (whereBorn.toLowerCase() === 'yes' || whereBorn.toLowerCase() === 'y') {
  // console.log('Nailed it!');
  alert(userName + ', you nailed it!');
  correctAnswers ++;
} else {
  // console.log('You are wrong!');
  alert(userName + ', you\'re so wrong!');
}


// SECOND Question


var whereBefore = prompt('Did I live in England before here?');
whereBefore = whereBefore.toLowerCase();
// console.log(userName + ' answered ' + whereBefore + ' to if I lived in England before here.');

if (whereBefore.toLowerCase() === 'no' || whereBefore.toLowerCase() === 'n') {
  // console.log('Perfect!');
  alert(userName + ', what a superb answer!');
  correctAnswers ++;
} else {
  // console.log('So not right!');
  alert(userName + ', not even close!');
}


// THIRD Question


var olderBrother = prompt('Do I have an older brother?');
olderBrother = olderBrother.toLowerCase();
console.log(userName + ' answered ' + olderBrother + ' to if I have an older brother.');

if (olderBrother.toLowerCase() === 'yes' || olderBrother.toLowerCase() === 'y') {
  // console.log('Well done!');
  alert(userName + ', well done!');
  correctAnswers ++;
} else {
  // console.log('Nope!');
  alert(userName + ', I disagree!');
}


// FOURTH Question


var oldSchool = prompt('Did I go to Auckland University of Technology?');
oldSchool = oldSchool.toLowerCase();
// console.log(userName + ' answered ' + oldSchool + ' to if I attended Auckland University of Technology.');

if (oldSchool.toLowerCase() === 'yes' || oldSchool.toLowerCase() === 'y') {
  // console.log('Excellent!');
  alert(userName + ', excellent work!');
  correctAnswers ++;
} else {
  // console.log('Definitely not right!');
  alert(userName + ', definitely not right!');
}


// FIFTH Question


var oldJob = prompt('Did I work as a paramedic?');
oldJob = oldJob.toLowerCase();
// console.log(userName + ' answered ' + oldJob + ' to if I worked as a paramedic.');

if (oldJob.toLowerCase() === 'yes' || oldJob.toLowerCase() === 'y') {
  // console.log('Perfect!');
  alert(userName + ', truly perfect!');
  correctAnswers ++;
} else {
  // console.log('Nope!');
  alert(userName + ', so wrong!');
}


// SIXTH Question


var guessNumber = prompt('Please guess my favorite number. You have 4 attempts.');
guessNumber = parseInt(guessNumber);
var numGuesses = 3;
// console.log(userName + ' answered ' + guessNumber + ' to what my favorite number is.');
while (numGuesses > 0){
  console.log(guessNumber);
  if (guessNumber === 13) {
    // console.log('Perfect!');
    correctAnswers ++;
    numGuesses = 0;
  } else if(guessNumber > 13) {
    numGuesses --;
    // console.log('Nope!');
    guessNumber = prompt(userName + ', To high!  Guess again.');
  } else if(guessNumber < 13){
    numGuesses --;
    guessNumber = prompt(userName + ', To low!  Guess again.');
  } else {
    guessNumber = prompt(userName + ', Must give an int!  Guess again.');
  }
}
alert(userName + ', Correct answer is 13!');



// SEVENTH Question

// Io, Europa, Ganymede, Callisto are Galilean moons

var moonArray = ['io', 'europa', 'ganymede', 'callisto'];

var nameMoon = prompt('Please name a Galilean moon. You have 6 attempts.').toLowerCase();
nameMoon = nameMoon.toLowerCase();
var moonGuesses = 6;
// console.log(userName + ' answered ' + nameMoon + ' as a Galilean moon.');
while(moonGuesses > 0){
  for(var i = 0; i < moonArray.length; i++){
    if(nameMoon === moonArray[i]) {
      alert('You are correct!');
      correctAnswers ++;
      moonGuesses = 0;
    }
  }
  moonGuesses --;
  console.log(moonGuesses);
  if(moonGuesses !== 0 && moonGuesses !== -1) {
    nameMoon = prompt('Wrong.  Try again.');
  } else if (moonGuesses === 0) {
    alert('Correct options are io, europa, ganymede, callisto');
  } else if(moonGuesses === -1){
    alert('You are right.  All possible options were io, europa, ganymede, callisto');
  }
}



// THANK YOU ALERT
function math(){
  var percent = Math.round(correctAnswers/7*100);
  console.log(correctAnswers);
  return percent;
}
console.log(math());
alert(userName + ' thank you for playing! You have answered ' + math() + ' percent correctly!');
