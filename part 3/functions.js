let myText = "I am a string";
let newString = myText.replace("string","sausage");
console.log(newString);

// The replace() string function takes a source string,
// and then a target string and replaces the source string
// with the target string, and returns the newly formed string

// Manipulated array

let myArray = ["I", "like", "nuggets" ];
let madeAString = myArray.join(" ");
console.log(madeAString);

// The join function takes an array, joins
// all the array items together into a single
// string, and returns the new string

let myNumber = Math.random();

// This generates a random number between 0 and upto, but not including, 1

// Functions vs methods 

function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  
  // Custom function to draw random circles which has been named "draw"

  // It can be invoked in any part of a webiste html by using draw();

  function random(number) {
      return Math.floor(Math.random()*number);
  }

  // Invoking functions

  function myFunction() {
      alert("hello");
  }

  myFunction();

  // Calls the function

 


