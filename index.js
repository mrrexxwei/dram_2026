// 1. add event listener to pictures. When click on pictures, a sound will be played
// ### write your code here ###

// Converting JavaScript object to JSON string
const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":25}'
console.log(jsonString['name']);

// Converting JSON string to JavaScript object
const jsonData = '{"name":"Bob","age":30}';
const parsedObj = JSON.parse(jsonData);
console.log(parsedObj.name); // "Bob"

// 2. add event listener to the document element. Listen to any key press event. 
// if any of w, a, s, d, j, k or l is pressed, a sound will be display too.
let letters = ['a', 'w', 's', 'd', 'j', 'k', 'l'];
// ### write your code here ###



// --- you don't need to change the code below this line ---
// a fucntion can make sound, use key as a pass-in peremeter
// the program will play different sound base on the key pass in
// mp3 files are in the "sounds" folder, just find a way to play it
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      // updateRecord(key);
      break;
    default: console.log(key);
  }
}

