// Your code

// const dodger = document.getElementById('dodger');
// dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = '100px' // this is moving 100px from the bottom
// dodger.style.right = '100px';


// document.addEventListener('keydown', (e) => console.log(e));
// //we use (e) to give a callback function ability to use the event listener

//(9) is the same written in an arrow function
// document.addEventListener('keydown', function(event){
//  console.log(event);
//})
// function moveDodgerLeft(){ 
// document.addEventListener('keydown', function(e){
//   if (e.key === 'ArrowLeft') {
//     // we check to see if the key that was pressed matches the property of the event object, which is 'ArrowLeft'
//     const leftNumbers = dodger.style.left.replace('px', '');
//     // if  the keydown event matches then we get the current value of the dodger's style left and uses the string replace() method to remove the 'px' and store the result in leftNumbers.
//     const left = parseInt(leftNumbers, 10);
//     // we parse leftNumbers as an integer and store that result in left. 

//     dodger.style.left = `${left - 5}px`;
//     // updating the dodgers style.left property using interpolation to inject the current value to subtract 1 . If the key that's pressed is not arrow left then nothing will happen.     
//   }
// });


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


dodger = document.getElementById("dodger");

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
    //using style.right doesn't change the style.left property. javaScript gives precedence to style.left. Once the user presses the left arrow key for the first time. style.left is stored and style.right would be ignored. Which is why we have to use + 1 to go right rather than style.right. We could do vise versa and only use style.right however we're only limited to +, - to go left or right. 
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight(); // callback function? 

  }
});

//replace() 
    // searches a string for a value or a regular expression 
    // returns a new string with the value(s) replaced.
    // does not change the original string. 