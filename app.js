
// //   CHAPRER#17-20 START

// var emptyArray = [[]];


// var matrixArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }
 
// var tableNumber = parseInt(prompt("Enter your table number"));
// var tableLength = parseInt(prompt("Enter your table length"));

// for (var i = 1; i <= tableLength; i++) {
//     console.log(`${tableNumber} x ${i} = ${tableNumber*i}`);
// }

  
//  var fruitsArr = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruitsArr.length; i++) {
//     console.log(`Element at index ${i} is ${fruitsArr[i]}`);
// }

// console.log("Counting: ");
// for (var i = 1; i <= 15; i++) {
//     console.log(i);
// }
// console.log("Reverse Counting: ");
// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }
// console.log("Even: ");
// for (var i = 0; i <= 20; i += 2) {
//     console.log(i);
// }
// console.log("Odd: ");
// for (var i = 1; i < 20; i += 2) {
//     console.log(i);
// }
// console.log("Series: ");
// for (var i = 2; i <= 20; i += 2) {
//     console.log(i + "k");
// }
   
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

 
// var userInput = prompt("Enter the item you want to search:");

// if (A.includes(userInput)) {
//     console.log(`${userInput} is found in the list.`);
// } else {
//     console.log(`${userInput} is not found in the list.`);
// }

 
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];  

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];  
//     }
// }

// console.log("The largest number is: " + largest);

// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];  

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];  
//     }
// }

// console.log("The smallest number is: " + smallest);

// console.log("Multiples of 5 from 1 to 100:");
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// //   CHAPRER#17-20 COMPLETED

// // CHAPTER#21-25 START
 
// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");


// var phoneModel = prompt("Please enter your favorite mobile phone model:");

 
// var modelLength = phoneModel.length;
 
// alert("The length of your favorite mobile phone model is: " + modelLength + " characters.");

 
// var phoneModel = prompt("Please enter your favorite mobile phone model:");
// var modelLength = phoneModel.length;
// alert(`Your favorite mobile phone model is: ${phoneModel} length of string  is ${ modelLength}`);
         
 
// var word = "Pakistani";
// var index = word.indexOf("n");
// if (index !== -1) {
//     alert("The index of the letter 'n' in the word 'Pakistani' is: " + index);
// } else {
//     alert("The letter 'n' is not found in the word 'Pakistani'.");
// }
 
// var phrase = "Hello World";
// var lastIndex = phrase.lastIndexOf("l");
// if (lastIndex !== -1) {
//     alert("The last index of the letter 'l' in 'Hello World' is: " + lastIndex);
// } else {
//     alert("The letter 'l' is not found in 'Hello World'.");
// }


// var word = "Pakistani";
// var characterAtThirdIndex = word.charAt(3);
// alert("The character at the 3rd index in 'Pakistani' is: " + characterAtThirdIndex);

 
// var firstName = prompt("Please enter your first name:")
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "!");

 
// var word = "Hyderabad";
// var updatedWord = word.replace("Hyder", "Islam");
// alert("The updated word is: " + updatedWord);

 
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var updatedMessage = message.replace(/and/g, "&");
// alert("The updated message is: " + updatedMessage);

 
// var stringNumber = "472";
// var convertedNumber = Number(stringNumber);
// alert(`String: ${stringNumber} (Type: ${typeof stringNumber})
// Number: ${convertedNumber} (Type: ${typeof convertedNumber})`);
 
// var userInput = prompt("Please enter some text:");
// var upperCaseInput = userInput.toUpperCase();
// alert("Your input in capital letters is: " + upperCaseInput);

 
// var num = 35.36;
// var numString = num.toString();
// var result = numString.replace('.', '');
// alert("The result is: " + result);
 
// var username = prompt("Please enter your username:");
// var specialCharacters = ['@', '.', '!', ','];
// while (username.includes('@') || username.includes('.') || username.includes('!') || username.includes(',')) {
//     username = prompt("Invalid username. Please enter a valid username (no special characters like @, ., !):");
// }
// alert("Your valid username is: " + username);
 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Please enter the item you want to search for:");
// var found = A.some(function(item) {
//     return item.toLowerCase() === userInput.toLowerCase();
// });
// if (found) {
//     alert(userInput + " is available in the list.");
// } else {
//     alert(userInput + " is not available in the list.");
// }
 
// var password = prompt("Please enter your password:");
 
// while (true) {
     
//     if (password.length < 6) {
//         password = prompt("Invalid password. Must be at least 6 characters long. Please enter again:");
//         continue;
//     }
//     if (!isNaN(password.charAt(0))) {
//         password = prompt("Invalid password. Cannot start with a number. Please enter again:");
//         continue;
//     }
//     var hasLetter = /[a-zA-Z]/.test(password);
//     var hasNumber = /[0-9]/.test(password);
    
//     if (!hasLetter || !hasNumber) {
//         password = prompt("Invalid password. Must contain both alphabets and numbers. Please enter again:");
//         continue;
//     }
//     break;
// }
// alert("Your password is valid!");
 
// var university = "University of Karachi";
// var universityArray = university.split(' '); // Split by spaces
// alert("The elements of the array are: " + universityArray.join(', '));
 
// var userInput = prompt("Please enter some text:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// alert("The last character is: " + lastCharacter);

 