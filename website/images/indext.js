// let username;

// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("header").textContent = 'Hello'+ ' ' + username;
// }

// let PI = 3.142;
// let radius;
// let circumference;

// document.getElementById("submit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + ' ' + 'cm';
// }


// generate random numbers 

// let randomNum = Math.floor(Math.random() * 6);
// console.log(randomNum);


// const max = 100;
// const min = 50;
// let randNum = Math.floor(Math.random() *( max - min)) + min ;
// console.log(randNum);




// const decrement = document.getElementById("decBtn");
// const increment = document.getElementById("increBtn");
// const reset = document.getElementById("resetBtn");
// const countLabel = document.getElementById("btns");
// let count = 0;

// decrement.onclick = function(){
//     count--;
//     countLabel.textContent = count;


// }

// increment.onclick = function(){
//     count++;
//     countLabel.textContent = count;


// }

// reset.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;


// }


// const button = document.getElementById("myButton")
// const countRoll = document.getElementById("myLabel")
// const max = 6;
// const min = 1

// button.onclick = function(){
//     let randomNum = Math.floor(Math.random() * max) + min;
//     countRoll.textContent = randomNum;
// }


// const myText = document.getElementById("btnd")
// const submit = document.getElementById("btnd-submit")
// const reultElement = document.getElementById("result")

// let age;

// submit.onclick = function(){
//      age = myText.value
//      age = Number(age);

//      if(age >= 100){
//         reultElement.textContent = "you are too old!"
//      }
//      else if (age == 0) {
//         reultElement.textContent = "you can't enter you are just 0!"
        
//      }
//       else if  (age >= 18 ) {
//         reultElement.textContent = "you are old enough to acess this site!"
        
//      }
//      else if (age < 0){
//         reultElement.textContent = "you cant't be below 0! "
//      }
//      else{
//         reultElement.textContent = "you must be 18+ to enter this site!"
//      }
// }

const Checkbox = document.getElementById("myCheckbox")
const visa = document.getElementById("visaButton")
const masterCard = document.getElementById("masterCard")
const Paypal = document.getElementById("myPaypal")
const Submit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")


Submit.onclick = function(){

    if(Checkbox.checked){
        subResult.textContent = "you are subcribe."
    }else{
        subResult.textContent = "you are NOT subcribe."
    }

    if (visa.checked) {
      paymentResult.textContent = "you are paying with visa."  
    }
    else if (masterCard.checked) {
        paymentResult.textContent = "you are paying with master card."
    } 
    else if (Paypal.checked) {
        paymentResult.textContent = "you are paying with paypal."
    }
    else {
        paymentResult.textContent = "you are yet to pay."
    } 
    
        
    
}


//  let username = window.prompt("Enter username");
// // No-Method chain //

//  username = username.trim();
//  let firstLetter = username.charAt(0);
//  firstLetter = firstLetter.toUpperCase();

//  extrachars = username.slice(1);
//  extrachars = extrachars.toLowerCase();

//  username = firstLetter + extrachars;

// console.log(username);


// //Method Chain //
// username = username.trim().charAt(0).toUpperCase + username.trim().slice(1).toLowerCase;
// console.log(username);


// let guessCount = 0;
// let randomNum = Math.ceil(Math.random() * (100 - 1  + 1));



// let guessNum = window.prompt("Guess the number from 1 to 100.")




// while (guessNum >= 1 && guessNum <= 100) {
//     guessCount++;

    
// if (guessNum == randomNum) {
//     window.alert("Congrats!✨🎉🎊 you guess the  number in " + guessCount + " guesses.")
//      break;
// }
// else if(guessNum > randomNum){
//     window.alert("you guess too high!")
// }
// else{
//     window.alert("you guess too low!")
// }

// guessNum = window.prompt("Guess the number from 1 to 100.")

    
// }

