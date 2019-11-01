'use strict';

var userName = prompt('Hello, what is your name?');
// console.log('User Name: ' + userName);

alert(userName + ' welcome to my page!');


// FIRST QUESTION


var whereBorn = prompt('Was I born in Seattle?');
whereBorn = whereBorn.toLowerCase();
// console.log(userName + ' answered ' + whereBorn + ' to if I was born in Seattle.');

if (whereBorn.toLowerCase() === 'yes' || whereBorn.toLowerCase() === 'y') {
  // console.log('Nailed it!');
  alert(userName + ', you nailed it!');
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
} else {
  // console.log('Nope!');
  alert(userName + ', so wrong!');
}


// SIXTH Question


var guessNumber = prompt('Please guess my favorite number. You have 4 attempts.');
guessNumber = parseFloat(guessNumber);

// console.log(userName + ' answered ' + guessNumber + ' to what my favorite number is.');

if (guessNumber === '13') {
  // console.log('Perfect!');
  alert(userName + ', bravo!');
} else {
  // console.log('Nope!');
  alert(userName + ', read minds better!');
}


// SEVENTH Question

// Io, Europa, Ganymede, Callisto are Galilean moons

var nameMoon = ['io', 'europa', 'ganymede', 'callisto'];

var nameMoon = prompt('Please name a Galilean moon. You have 6 attempts.');
nameMoon = nameMoon.toLowerCase();
// console.log(userName + ' answered ' + nameMoon + ' as a Galilean moon.');



// THANK YOU ALERT

alert(userName + ' thank you for playing!');
