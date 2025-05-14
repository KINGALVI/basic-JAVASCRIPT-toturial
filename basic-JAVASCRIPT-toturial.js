// Normal-JAVASCRIPT-Toturial-START //





//// How to test if JavaScript code is working ////
console.log(5, 'Hello JavaScript', 5);










// 1. Using var in JavaScript

// Using var for numbers
var age = 2;
console.log(age);



// Using var for names
var information = "Alvi";
var country_information = "BANGLADESH";
console.log(country_information, information);



// Using var for true or false values
var true_false = true;
console.log(true_false);



var true_false = false;
console.log(true_false);



// Using var for addition and subtraction of multiple values
var tomato_price = 20;
var potato_price = 20;
var total_price = tomato_price + potato_price;
console.log(total_price);



var tomato_price = 20;
var potato_price = 20;
var total_price = tomato_price - potato_price;
console.log(total_price);



// Using var for multiplication and division of multiple values
var orange_price = 50;
var quantity = 5;
var total_price = orange_price * quantity;
console.log(total_price);



var orange_price = 50;
var quantity = 5;
var total_price = orange_price / quantity;
console.log(total_price);



// Changing the value of a var
var true_false = true;
true_false = false;
console.log(true_false);



var tomato_price = 20;
tomato_price = 10;
var potato_price = 20;
potato_price = 15;
var total_price = tomato_price + potato_price;
console.log(total_price);



// Adding new values without changing the original var value
var tomato_price = 20;
tomato_price += 10;
var potato_price = 20;
potato_price += 15;
var total_price = tomato_price + potato_price;
console.log(total_price);



// Subtracting new values without changing the original var value
var tomato_price = 20;
tomato_price -= 10;
var potato_price = 20;
potato_price -= 5;
var total_price = tomato_price - potato_price;
console.log(total_price);



// Multiplying new values without changing the original var value
var orange_price = 50;
orange_price *= 25;
var quantity = 5;
quantity *= 25;
var total_price = orange_price * quantity;
console.log(total_price);



// Dividing new values without changing the original var value
var orange_price = 50;
orange_price /= 25;
var quantity = 5;
quantity /= 25;
var total_price = orange_price / quantity;
console.log(total_price);



// Finding the remainder of a division
var mangoes = 17;
var person = 5;
console.log(mangoes % person);



// Adding a space between two string variables
var information = "Alvi";
var country_information = "BANGLADESH";
var total_information = information + " " + country_information;
console.log(total_information);



// Converting a string number to an actual number
var orange_price = "50";
var orange_prizes = parseInt(orange_price);
console.log(orange_prizes);



// Converting a string decimal to an actual decimal number
var gpa = "3.55";
var gpa_number = parseFloat(gpa);
console.log(gpa_number);



// Controlling decimal places using toFixed()
var num1 = 0.1;
var num2 = 0.2;
var math = num1 + num2;
math = math.toFixed(2);



// Swapping values between two variables
var first_input = 10;
var second_input = 5;

var swap = second_input;
second_input = first_input;
first_input = swap;
console.log(first_input, second_input);



// Using destructuring to swap values
[first_input, second_input] = [second_input, first_input];
console.log(first_input, second_input);



// Checking the data type of a variable
var price = 100;
console.log(typeof price);

var price = "100";
console.log(typeof price);

var true_false = true;
console.log(typeof true_false);



// Converting a full string to lowercase
const paragraph_one = "My information is Alvi. I want to be a good full-stack web developer.";
const lower_case_text = paragraph_one.toLowerCase();
console.log(lower_case_text);



// Converting a full string to uppercase
const paragraph_two = "My information is Alvi. I want to be a good full-stack web developer.";
const upper_case_text = paragraph_two.toUpperCase();
console.log(upper_case_text);



// Checking if a specific word exists in a string using includes()
const paragraph1 = "My information is Alvi. I want to be a good full-stack web developer.";
const word_exists1 = paragraph1.includes("fullstack");
console.log(word_exists1);



// Checking if a string starts with a specific word
const paragraph2 = "My information is Alvi. I want to be a good full-stack web developer.";
const starts_with_check = paragraph2.startsWith("fullstack");
console.log(starts_with_check);



// Checking if a string ends with a specific word
const paragraph3 = "My information is Alvi. I want to be a good full-stack web developer.";
const ends_with_check = paragraph3.endsWith("developer");
console.log(ends_with_check);



// Comparing values using different operators
var num1 = 50;
var num2 = 100;
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 == num2);
console.log(num1 !== num2);










// 2. Using Arrays in JavaScript

// Checking if a variable is an array
const bd = [12, 44, 55, 43, 33];
console.log(Array.isArray(bd));



// Merging two arrays using concat()
const connected1 = [12, 44, 55, 43, 33];
const connected2 = [12, 44, 55, 43, 33];
const connection = connected1.concat(connected2);
console.log(connection);



// Using arrays for numbers
var age = [11, 12, 13, 14, 15];
console.log(age);



// Finding the index of an element in an array
var number = [11, 12, 13, 14, 15];
console.log(number.indexOf(13));

var information = ["Alvi", "Abusle", "Ahsan", "Arghya", "Apu"];
console.log(information.indexOf("Apu"));



// Modifying array elements
var alvi = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
alvi[3] = "Clash of Clans";
console.log(alvi);

var number = [11, 12, 13, 14, 15];
number[2] = 100;
console.log(number);



// Checking the length of an array
var age = [11, 12, 13, 14, 15];
console.log(age.length);



// Using arrays for names
var information = ["Alvi", "Abusle", "Ahosan", "Arghya", "Apu"];
console.log(information);



// Finding a specific element in an array
var number = [50, 51, 52, 53, 54, 55];
console.log(number[3]);

var information = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
console.log(information[1]);



// Changing a specific value in an array
var number = [50, 51, 52, 53, 54, 55];
number[2] = 100;
console.log(number);

var information = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
information[3] = "Clash of Clans";
console.log(information);



// Finding the index of an element
var number = [50, 51, 52, 53, 54, 55];
var positionIndex = number.indexOf(55);
console.log(positionIndex);

var information = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
var positionIndex = information.indexOf("Alvi");
console.log(positionIndex);



// Adding new elements to the end of an array using push()
var number = [50, 51, 52, 53, 54, 55];
number.push(500);
console.log(number);

var informations = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
informations.push("Clash of Clans");
console.log(informations);



// Removing the last element of an array using pop()
var number = [50, 51, 52, 53, 54, 55];
number.pop();
console.log(number);

var informations = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
informations.pop();
console.log(informations);



// Viewing the removed last element
var number = [50, 51, 52, 53, 54, 55];
element = number.pop();
console.log(element);

var informations = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
element = informations.pop();
console.log(element);



// Adding new elements to the beginning of an array using unshift()
var number = [50, 51, 52, 53, 54, 55];
number.unshift(500);
console.log(number);

var informations = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
informations.unshift("Clash of Clans");
console.log(informations);



// Removing the first element of an array using shift()
var number = [50, 51, 52, 53, 54, 55];
number.shift();
console.log(number);

var informations = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
informations.shift();
console.log(informations);



// Viewing the removed first element
var number = [50, 51, 52, 53, 54, 55];
element = number.shift();
console.log(element);

var informations = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
element = informations.shift();
console.log(element);



// Splitting a sentence into an array of words using split()
const paragraph4 = "My information is Alvi. I want to be a good full-stack web developer.";
const wordsArray = paragraph4.split(" ");
console.log(wordsArray);



// Combining an array into a string using join()
const nameInformation = ["Alvi", "Shale", "Apu", "Arghya", "Rakib", "Ahsoan"];
const joinedString = nameInformation.join(" = ");
console.log(joinedString);



// Using Math.pow() to find the power of a number
const math1 = Math.pow(3, 8);
console.log(math1);



// Using Math.abs() to find absolute differences
const mark1 = 50;
const mark2 = 100;
const absoluteDifference = Math.abs(mark1 - mark2);
console.log(absoluteDifference);



// Using Math.round(), Math.ceil(), and Math.floor()
const numberVal = 2.43434;
console.log(Math.round(numberVal)); // Rounded to nearest integer
console.log(Math.ceil(numberVal));  // Rounded up
console.log(Math.floor(numberVal)); // Rounded down



// Generating random numbers
console.log(Math.random()); // Any random number
console.log(Math.random() * 100); // Random number up to 100
console.log(Math.round(Math.random() * 100)); // Rounded random number up to 100



// Finding the maximum and minimum value in an array
const bigNumbers = [25, 50, 100];
console.log(Math.max(...bigNumbers)); // Maximum value

const smallNumbers = [25, 50, 100];
console.log(Math.min(...smallNumbers)); // Minimum value










// 3. How Conditionals Work in JavaScript

// *1st Rule
var iphone_price = 1000;
var my_budget = 500;

// If the condition is true, this message will appear.
if (iphone_price > my_budget) {
  console.log("You cannot buy an iPhone");
}
// If the condition is false, this message will appear.
else {
  console.log("You can buy an iPhone");
}



// *2nd Rule
var isGraduated = true;
var salary = 5000;

// If both conditions are true, this message will appear.
if (isGraduated == true && salary > 4000) {
  console.log("I will succeed");
}
// If both conditions are false, this message will appear.
else {
  console.log("I will not succeed");
}

var isGraduated = true;
var salary = 5000;

// If at least one condition is true, this message will appear.
if (isGraduated == true || salary < 9000) {
  console.log("You can win");
}
// If neither condition is true, this message will appear.
else {
  console.log("You cannot win");
}



// *3rd Rule
var isGraduated = true;
var salary = 5000;
var car = 1;

// If all three conditions are true, this message will appear.
if ((isGraduated == false && salary > 5000) || car <= 0) {
  console.log("You can shine");
}
// If all three conditions are false, this message will appear.
else {
  console.log("You cannot shine");
}



// *4th Rule
var money = 50;
var chicken = 35;
var toast = 45;
var coke = 40;

// In this rule, if one condition is met, the others won't be checked.
if (chicken > money) {
  console.log("I will eat chicken");
}
else if (toast < money) {
  console.log("I will eat toast");
}
else if (coke > money) {
  console.log("I will drink coke");
}



// *5th Rule
var math = true;
var geometry = true;

// In this rule, an if-else statement is nested inside another if-else statement.
if (math == true) {
  if (math == true && geometry == true) {
    console.log("I will be a winner");
  }
  else {
    // Additional conditions can be added here.
  }
}
else {
  if (math == false && geometry == false) {
    console.log("I will not be a winner");
  }
  else {
    // Additional conditions can be added here.
  }
}



// Special Example of If-Else
var my_score = 85;
var tom_score = 66;
var jane_score = 95;
var peter_score = 56;
var john_score = 40;

if (my_score >= 80) {
  console.log("A Grade");
}
else if (my_score >= 60) {
  console.log("B Grade");
}
else if (my_score >= 50) {
  console.log("C Grade");
}
else if (my_score >= 40) {
  console.log("D Grade");
}
else {
  console.log("F Grade");
}



// Comparing user input with stored information using case-insensitive matching
const userInformation = "alvi";
const userInput = "alvo";

if (userInformation.toUpperCase() === userInput.toUpperCase()) {
  console.log(true);
}
else {
  console.log(false);
}










// 4. How Loops Work in JavaScript

// Basic use of a while loop
var roastGiven = 0;
while (roastGiven < 7) {
  console.log("Roast given, please!!");
  console.log(roastGiven);
  roastGiven++;
  // roastGiven = roastGiven + 1;
  // roastGiven += 1;
}



// Short version of a for loop
for (var roastGiven = 1; roastGiven <= 10; roastGiven++) {
  console.log(roastGiven);
}



// Using a for-of loop
const ofLoopNumber = [12, 34, 56, 78, 90];
for (const indexOfLoopNumber of ofLoopNumber) {
  console.log(indexOfLoopNumber);
}



// Shorter for loop examples
for (var r = 5; r <= 15; r++) {
  console.log(r);
}

for (var r = 5; r <= 15; r = r + 2) {
  console.log(r);
}

for (var r = 5; r <= 15; r += 2) {
  console.log(r);
}



// Iterating through an array using a for loop
const number50 = [2, 56, 445, 645, 353, 2424, 5636, 2355];
for (let i = 0; i < number50.length; i++) {
  console.log(number50[i]);
}



// Using a while loop to print odd numbers
var roastGiven = 1;
while (roastGiven <= 10) {
  console.log(roastGiven);
  roastGiven += 2;
}



// Using a while loop to print even numbers
var roastGiven = 0;
while (roastGiven <= 10) {
  console.log(roastGiven);
  roastGiven += 2;
}



// Using a break in a for loop to stop execution early
for (var i = 1; i <= 25; i++) {
  console.log(i);
  if (i >= 20) {
    break;
  }
}



// Using continue in a loop example
var numbers = [45, 34, 55, 67, 54, 34, 52, 50];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}



// Using break in a loop example
var numbers = [45, 34, 55, 67, 54, 34, 52, 50];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    break;
  }
  console.log(number);
}



// Using a reverse while loop
for (var num = 10; num >= 1; num--) {
  console.log(num);
}



// Shorter syntax for iterating an array using for-of loop
const al = [24, 56, 78, 45, 73, 39];
for (const value of al) {
  console.log(value);
}



// Using a switch statement instead of multiple if-else conditions
const color = "";
switch (color) {
  case "green":
    console.log("You are green, my friend.");
    break;
  case "blue":
    console.log("You are blue, my friend.");
    break;
  case "white":
    console.log("You are white, my friend.");
    break;
  case "red":
    console.log("You are red, my friend.");
    break;
  case "yellow":
    console.log("You are yellow, my friend.");
    break;
  default:
    console.log("You are my black, black friend.");
}










// 5. How Functions Work in JavaScript

// Basic function declaration and execution
function starting(money) {
  console.log("Alvi Al Mahmud");
  console.log(money);
}
starting(100);



// Using a function to add two numbers
function starting(num1, num2) {
  console.log("Going to add:", num1, num2);
}
starting(100, 200);



// Function to display names
function nameInfo(name1, name2) {
  console.log("Our names are:", name1, name2);
}
nameInfo("Alvi", "Khan");



// Passing an external variable as a function parameter
function nameData(info) {
  console.log("My name is", info);
}

var peopleName = "Alvi";
nameData(peopleName);

function numberData(info) {
  console.log("My number is", info);
}
var peopleNumber = 100;
numberData(peopleNumber);



// Function with multiple parameters
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);
}
sum(23, 34, 54, 35, 64);



// Using return in a function
function add(alvi1, alvi2) {
  console.log(alvi1, alvi2);
  var sum = alvi1 + alvi2;
  return sum;
}
var total = add(10, 15);
console.log("Total:", total);



// Example of a function returning a calculated value
function egg(money) {
  var eggPrice = 10;
  var quantity = money / eggPrice;
  return quantity;
}
var totalEgg = egg(300);
console.log("Total eggs:", totalEgg);



// Using constants in functions
const assignment1 = 55;
const assignment2 = 42;
const assignment3 = 56;

function getAverage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const average = total / 3;
  return average;
}
const totalAverage = getAverage(assignment1, assignment2, assignment3);
console.log("Total average:", totalAverage);



// Using arguments inside a function (only available in function scopes)
function argumentsExample(num1, num2) {
  console.log(num1, num2, arguments);
}
argumentsExample(3, 4, 3, 4, 5, 56, 43, 345, 566, 3455);



// Combining multiple function results
function addNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var result1 = addNumbers(12, 14);
var result2 = addNumbers(34, 43);
const finalResult = addNumbers(result1, result2);
console.log("Final result:", finalResult);



// Important function example: Converting inches to feet
function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

var dadaInches = 144;
var dadaFeet = inchToFeet(dadaInches);
console.log("Feet:", dadaFeet);

var dadiInches = 144;
var dadiFeet = inchToFeet(dadiInches);
console.log("Feet:", dadiFeet);



// Convert kilometers to miles
function milestone(kilometer) {
  var length = kilometer * 1.60934;
  return length;
}

const myKilometer = 5;
const myMilestone = milestone(myKilometer);
console.log("Miles:", myMilestone);

const herKilometer = 5;
const herMilestone = milestone(herKilometer);
console.log("Miles:", herMilestone);



// Checking even or odd numbers
function isEven(number) {
  const result = number % 2;
  if (result === 0) {
    console.log("This is an even number:", number);
  } else {
    console.log("This is an odd number:", number);
  }
}
isEven(44);



// Checking for leap years
function leapYear(year) {
  const yearCount = year % 4;
  if (yearCount === 0) {
    console.log("This is a leap year:", year);
  } else {
    console.log("This is a normal year:", year);
  }
}
leapYear(2022);



// Sum of all numbers in an array
const myNumbers = [5, 65, 45, 78, 32, 45, 91];

function getSumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    sum += element;
    console.log(index, element, sum);
  }
  return sum;
}
getSumOfArray(myNumbers);



// Finding even numbers in an array
const myNumbersList = [24, 56, 78, 45, 73, 39];

function getEvenNumbersOfArray(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    if (element % 2 === 0) {
      console.log(index, element);
      evenNumbers.push(element);
    }
  }
  return evenNumbers;
}
getEvenNumbersOfArray(myNumbersList);



// Normal factorial function using a loop
function normalFactorial(number) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}



// Reverse factorial function using a loop
function reverseFactorial(number) {
  for (let i = number; i >= 1; i--) {
    console.log(i);
  }
}



// Factorial using a for loop
function factorial1(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
    console.log(i);
  }
  return result;
}
const number1 = 5;
const fact1 = factorial1(number1);
console.log("Factorial of", number1, fact1);



// Factorial using a while loop
function factorial2(number) {
  let i = 1;
  let result = 1;
  while (i <= number) {
    result *= i;
    i++;
  }
  return result;
}
const number2 = 10;
const fact2 = factorial2(number2);
console.log("Factorial of", number2, fact2);



// Finding odd numbers in an array
const oddNumbersList = [24, 56, 77, 45, 78, 99];

function getOddNumbersOfArray(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    if (element % 2 !== 0) {
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}
getOddNumbersOfArray(oddNumbersList);



// Reverse string function
function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}
const myString = "I am a good boy";
console.log("Reversed string:", reverseString(myString));



// Recursive sum function
function sum(i) {
  if (i === 1) {
    return 1;
  } else {
    return i + sum(i - 1);
  }
}
console.log("Recursive sum:", sum(5));



// Recursive factorial function
function factorialRecursive(i) {
  if (i === 1) {
    return 1;
  }
  return i * factorialRecursive(i - 1);
}
console.log("Recursive factorial:", factorialRecursive(5));










// 6. How Objects Work in JavaScript

// Declaring a basic object
var student = {
  id: 66242,
  information: "Alvi Al Mahmud",
  class: 9,
  marks: 95,
};



// Modifying a property value in an object
student.class = 10;
console.log(student);



// Accessing a specific property value in an object
console.log(student.information);



// Getting all property names as an array of strings
var properties = Object.keys(student);
console.log(properties);



// Getting all property values as an array
var propertyValues = Object.values(student);
console.log(propertyValues);



// Important Object Example: Using for loops with objects

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
};



// Long version using Object.keys() and Object.values()
var keys = Object.keys(shoppingCart);
console.log(keys);



var values = Object.values(shoppingCart);
console.log(values);



for (let i = 0; i < keys.length; i++) {
  var propertyInformation = keys[i];
  var propertyValue = values[i];
  console.log(propertyInformation, propertyValue);
}



// Short version using a for-in loop
for (var propertyInformation in shoppingCart) {
  const value = shoppingCart[propertyInformation];
  console.log(propertyInformation, value);
}



// Declaring an array with mixed values
var arrayExample = ["Alvi :", 54, "Apu :", 45];
console.log(arrayExample);



// Logging an object
console.log(shoppingCart);



// Array of objects representing products
const products = [
  { id: 1, productName: "Xiaomi Phones", productPrice: 1500 },
  { id: 2, productName: "Samsung Phones", productPrice: 1500 },
  { id: 3, productName: "iPhone Phones", productPrice: 1500 },
  { id: 4, productName: "Premax Phones", productPrice: 1500 },
  { id: 5, productName: "Xiaomi Laptop", productPrice: 1500 },
  { id: 6, productName: "Samsung Laptop", productPrice: 1500 },
  { id: 7, productName: "iPhone Laptop", productPrice: 1500 },
  { id: 8, productName: "Premax Laptop", productPrice: 1500 },
];



// Function to filter products based on a search term
function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.productName.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}



// Searching for products that include "phones"
const result25 = matchedProducts(products, "phones");
console.log(result25);





// Normal-JAVASCRIPT-Toturial-END //