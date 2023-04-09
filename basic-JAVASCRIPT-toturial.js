// javascript এর code কাজ করছে নাকি তা পরিক্ষা করা যায 
// console.log(5);









// ১ । javascript এ var এর ব্যবহার ।

// সংখ্যা ক্ষেত্রে var এর ব্যবহার ।
var age = 2;
// console.log(age);

// নাম এর ক্ষেত্রে var এর ব্যবহার ।
var information = "alvi";
var country_information = 'BANGLADESH';
// console.log(country_information, information);

// সত্য আথবা মিত্র্যা এর ক্ষেত্রে var এর ব্যবহার |
var true_false = true;
// console.log(true_false);

var true_false = false;
// console.log(true_false);

// একসাথে একাধিক var মান যোগ বা বিয়োগ এর ক্ষত্রে var এর ব্যবহার ।
var tomato_price = 20;
var potato_price = 20;
var total_price = tomato_price + potato_price;
// console.log(total_price);

var tomato_price = 20;
var potato_price = 20;
var total_price = tomato_price - potato_price;
// console.log(total_price);

// একসাথে একাধিক var মান গুন বা ভাগ এর ক্ষেত্রে var ব্যবহার ।
var orange_prize = 50;
var quantity = 5;
var total_price = orange_prize * quantity;
// console.log(total_price);

var orange_prize = 50;
var quantity = 5;
var total_price = orange_prize / quantity;
// console.log(total_price);

// কোন var এর মান পরিবতন করতে চাইলে এ ক্ষেত্রে var এর ব্যবহার ।
var true_false = true;
true_false = false;
// console.log(true_false);

var true_false = false;
true_false = true;
// console.log(true_false);

var tomato_price = 20;
tomato_price = 10;
var potato_price = 20;
potato_price = 15;
var total_price = tomato_price + potato_price;
// console.log(total_price);

var tomato_price = 20;
tomato_price = 10;
var potato_price = 20;
potato_price = 5;
var total_price = tomato_price - potato_price;
// console.log(total_price);

var orange_prize = 50;
orange_prize = 25;
var quantity = 5;
quantity = 25;
var total_price = orange_prize * quantity;
// console.log(total_price);

var orange_prize = 50;
orange_prize = 25;
var quantity = 5;
quantity = 25;
var total_price = orange_prize / quantity;
// console.log(total_price);

// কোন var এর মান পরিবতন না করে নতুন মান যোগ করতে চাইলে এ ক্ষেত্রে var এর ব্যবহার ।
var tomato_price = 20;
tomato_price += 10;
var potato_price = 20;
potato_price += 15;
var total_price = tomato_price + potato_price;
// console.log(total_price);

// কোন var এর মান পরিবতন না করে নতুন মান বিয়োগ করতে চাইলে এ ক্ষেত্রে var এর ব্যবহার ।
var tomato_price = 20;
tomato_price -= 10
var potato_price = 20;
potato_price -= 5;
var total_price = tomato_price - potato_price;
// console.log(total_price);

// কোন var এর মান পরিবতন না করে নতুন মান গুন করতে চাইলে এ ক্ষেত্রে var এর ব্যবহার ।
var orange_prize = 50;
orange_prize *= 25;
var quantity = 5;
quantity *= 25;
var total_price = orange_prize * quantity;
// console.log(total_price);

// কোন var এর মান পরিবতন না করে নতুন মান ভাগ করতে চাইলে এ ক্ষেত্রে var এর ব্যবহার ।
var orange_prize = 50;
orange_prize /= 25;
var quantity = 5;
quantity /= 25;
var total_price = orange_prize / quantity;
// console.log(total_price);

// কোন ভাগের ভাগশেষ নিণয় করতে হলে var এর নিয়ম ।
var mangoes = 17;
var person = 5;
// console.log(mangoes % person);

// দুইটী String টাইপ Variable মান এর মধ্যে space দিতে চাইলে এ ক্ষত্রে  এর ব্যবহার ।
var information = "alvi";
var country_information = 'BANGLADESH';
var total_information = information + ' ' + country_information;
// console.log(total_information);

// কোন string এর ভিতরে যদি সংখ্যা থাকে তাহলে সেটা যদি string থেকে যদি আসল সংখ্যয় পরিবতন এ ক্ষত্রে var এর ব্যাবহার
var orange_prize = '50';
var orange_prizes = parseInt(orange_prize);
// console.log(orange_prizes);

// কোন string এর ভিতরে যদি  দংশমিক সংখ্যা থাকে তাহলে সেটা সেটা কে আসল দশমিক আকেরে দেখাতে হলে এ ক্ষত্রে var এর ব্যাবহার
var gpa = '3.55';
var gap_number = parseFloat(gpa);
// console.log(gap_number);

//কোন Variable মান এর ফলাফল যদি দশমিক আকারে আসে এবং দশমিক ডিজিট যদি ৫ বা ৬ এর বেশি হয় , তাহলে toFixed() ব্যবহার করে দশমিক ডিজিট নিয়ত্রণ করা সম্ভব । 
var num1 = 0.1;
var num2 = 0.2;
var math = num1 + num2;
math = math.toFixed(2)

// var এর কোন মানটি সংখ্যা , কোন মানটি string এবং কোন মানটি boolean ক্ষেত্রে var এর ব্যবহার;
var price = 100;
// console.log(typeof price);

var price = '100';
// console.log(typeof price);

var true_false = true;
// console.log(typeof true_false);

// let constant এর ভিতরে যদি এক গুচ্ছো string থাকে এবং সেই string এর মধ্যে যদি সব আক্ষর কে যদি ছোট হাতের বা বড় হাতের করতে হয় তাহলে সে ক্ষত্রে let constant ব্যবহার এর নিয়ম।
const paragraphone = 'my information is alvi i want to de a good fullstack wed devoloper';
const ifexgiestone = paragraphone.toLowerCase('my');
console.log(ifexgiestone);

const paragraphtwo = 'my information is alvi i want to de a good fullstack wed devoloper';
const ifexgiesttwo = paragraphtwo.toUpperCase('my');

// let constant এর ভিতরে যদি এক গুচ্ছো string থাকে এবং সেই string এর মধ্যে যদি কোন নিদিষ্ট string  আছে নাকি সেটা আমরা বের করতে চাই সে ক্ষেত্র let constant ব্যবহার এর নিয়ম ।
const paragraph1 = 'my information is alvi i want to de a good fullstack wed devoloper';
const ifexgiest1 = paragraph1.includes("fullstack")
// console.log(ifexgiest1);

// কোন String এর প্রথম মান যদি আমরা বের করতে চাই সে ক্ষেত্রে var এর ব্যবহার ।
const paragraph2 = 'my information is alvi i want to de a good fullstack wed devoloper';
const ifexgiest2 = paragraph2.startsWith("fullstack");
// console.log(ifexgiest2);

// কোন String এর শেষ মান যদি আমরা বের করতে চাই সে ক্ষেত্রে var এর ব্যবহার ।
const paragraph3 = 'my information is alvi i want to de a good fullstack wed devoloper';
const ifexgiest3 = paragraph3.endsWith("devoloper");
// console.log(ifexgiest3);

// var এর ক্ষেত্রে কোন মান এর মধ্যে পাথক্য বা comparision বের করার নিয়ম ।
var num1 = 50;
var num2 = 100;
// console.log(num1 < num2);
// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num1 > num2);
// console.log(num1 <= num2);
// console.log(num1 <= num2);
// console.log(num1 <= num2);
// console.log(num1 >= num2);
// console.log(num1 >= num2);
// console.log(num1 >= num2);
// console.log(num1 == num2);
// console.log(num1 == num2);
// console.log(num1 !== num2);
// console.log(num1 !== num2);










// ২ । javascript এ Array এর ব্যবহার ।

// সংখ্যা ক্ষেত্রে Array এর ব্যবহার ।
var age = [11, 12, 13, 14, 15];
// console.log(age);

// Array কোন মান কোন জায়গায় আছে সেটা বের করার নিয়ম ।
var number = [11, 12, 13, 14, 15];
// console.log(number.indexOf(13));

var information = ['alvi', "abusle", "ahsan", "arghya", 'apu'];
// console.log(information.indexOf('apu'));

// কোন Array ভিতরে মান পরিবতন করতে চাইলে সে ক্ষেত্রে Array এর ব্যবহার ।
var alvi = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
alvi[3] = 'clash of clan'
// console.log(alvi);

var number = [11, 12, 13, 14, 15];
number[2] = 100;
// console.log(number);

// Array এর ভিতরে কত গুলো সংখ্যা আছে সেটা বের করার ক্ষেত্রে Array এর ব্যবহার ।
var age = [11, 12, 13, 14, 15];
// console.log(age.lenght);

// নাম এর ক্ষেত্রে Array এর ব্যবহার ।
var information = ['alvi', "abusle", "ahosan", "arghya", 'apu'];
// console.log(information);

// Array এর ভিতরে কত গুলো শব্দ আছে সেটা বের করার ক্ষেত্রে Array এর ব্যবহার ।
var information = ['alvi', "abusle", "ahosan", "arghya", 'apu'];
// console.log(information.length);

// Array এর ভিতরে কোন নিদিষ্ট আক্ষর বা সংখ্যা বের করতে চাইলে এ ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
// console.log(number[3]);

var information = ['alvi', "shale", "apu", "arghya",
  "rakib", 'ahsoan'];
// console.log(information[1]);

// কোন Array এর মান পরিবতন করতে চাইলে এ ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
number[2] = 100;
// console.log(number);

var information = ['alvi', "shale", "apu", "arghya",
  "rakib", 'ahsoan'];
information[3] = 'clash of clan'
// console.log(information);

// কোন Array এর মান কত নম্বরে আবস্থান করছে তা খুজে বের করতে চাইলে এ ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
var position_index = number.indexOf(55);
// console.log(position_index);

var information = ['alvi', "shale", "apu", "arghya",
  "rakib", 'ahsoan'];
var position_index = information.indexOf('alvi')
// console.log(position_index)

// কোন Array এর ভিতর শেষে নুতুন কোন মান যোগ করতে চাইলে সে ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
number.push(500);
// console.log(number);

var informations = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
informations.push('clash of clan');
// console.log(informations);

// কোন Array এর ভিতরে শেষ মান কে সরিয়ে ফেলতে চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
var number = [50, 51, 52, 53, 54, 55];
number.pop();
// console.log(number);

var informations = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
informations.pop();
// console.log(informations);

// কোন Array এর ভিতরে যে শেষ মানটা কে সরিয়ে ফেলা হয়েছে এবং সেটা দেখতে  চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
var number = [50, 51, 52, 53, 54, 55];
element = number.pop();
// console.log(element);

var informations = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
element = informations.pop();
// console.log(element);

//// কোন Array এর ভিতর প্রথমে নুতুন কোন মান যোগ করতে চাইলে সে ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
number.unshift(500);
// console.log(number);

var informations = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
informations.unshift('clash of clan');
// console.log(informations)

// কোন Array এর ভিতরে প্রথম মান কে সরিয়ে ফেলতে চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
var number = [50, 51, 52, 53, 54, 55];
number.shift();
// console.log(number);

var informations = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
informations.shift();
// console.log(informations);

// কোন Array এর ভিতরে প্রথম মানটা কে সরিয়ে ফেলা হয়েছে এবং সেটা দেখতে  চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
var number = [50, 51, 52, 53, 54, 55];
element = number.shift();
// console.log(element);

var informations = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
element = informations.shift();
// console.log(element);

// কোন string ভিতরে sentence এর word কে যদি আমারা array মত ভাগ করে দেখেতে চাই সে ক্ষেত্রে var এর ব্যবহার ।
const paragraph4 = 'my information is  alvi . i want to de a good fullstack wed devoloper';
const ifexgiest4 = paragraph4.split(' ');
// console.log(ifexgiest4);

const paragraph5 = 'my information is  alvi . i want to de a good fullstack wed devoloper';
const ifexgiest5 = paragraph5.split('.');
// console.log(ifexgiest5);

const paragraph6 = ['my information is  alvi  i want to de a good fullstack wed devoloper'];
const ifexgiest6 = paragraph6.join(',');
// console.log(ifexgiest6);

const paragraph7 = 'my information is  alvi .'; 'i want to de a good fu'; 'llstack wed devoloper';
const ifexgiest7 = paragraph7.slice('');
// console.log(ifexgiest8);

// আলাদা আলাদা থাকা String কে যদি জোড়া লাগেতে হয় , তাহলে সে ক্ষত্রে let const এর ব্যবহার ।
const nameinformation = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
const join = nameinformation.join('=')
// console.log(join);

// the use of power math in  in javscript
const math1 =pow(3, 8);
// // console.log(math1);

// কোন let const এর মান positive বা negitive এ আছে নাকি সেটা না দেখে যদি প্রকৃত ফলাফল পেতে চাই তাহলে সে ক্ষত্রে let const এর ব্যবহার ।
const mark1 = 50;
const mark2 = 100;
const allmark = Math.abs(mark1 - mark2);
console.log(allmark);

// কোন let const এর দশমিক সংখ্যাওযলা মান কে যদি আমরা পূন সংখ্যা আকারে পেতে চাই , তাহলে সে ক্ষত্রে let const এর ব্যবহার ।
const nonumber = 2.43434;
const nonumberresult1 = Math.round(nonumber);
//
const nonumberresult2 = Math.ceil(nonumber);
//
const nonumberresult3 = Math.floor(nonumber);
// console.log(nonumberresult);

// JavaScript এ আমরা যেকোন Random সংখ্যা পেতে চাই , তাহলে সে যে Code টা ব্যবহার করতে হবে । 
const anynumber = Math.random();
// console.log(anynumber);












// ৩। javascript এ condisonal যেভাবে কাজ করে ।

//  *১ নিয়ম 
var iphone_price = 1000;
var my_budget = 500;
// যদি কথা সত্যি হয় তাহলে এই উত্তর আসবে ।
if (iphone_price > my_budget) {
  // console.log("you can not buy iphone");
}
// যদি কথা সত্যি না হয় তাহলে এই উত্তর আসবে ।
else {
  // console.log("you can buy iphone");
}

// *২য় নিয়ম 
var isGraduated = true;
var salary = 5000;
// যদি এই দুইটি  কথা সত্যি হয় তাহলে এই উত্তর আসবে ।
if (isGraduated == true && salary > 4000) {
  // console.log("i will succsess");
}
// যদি এই দুইটি  কথা সত্যি না হয় তাহলে এই উত্তর আসবে ।
else {
  // console.log("i will not success");
}

var isGraduated = true;
var salary = 5000;
// যদি এই দুইটি  কথার মধ্যে একটি কথা সত্যি হয় তাহলে এই উত্তর আসবে ।
if (isGraduated == true || salary < 9000) {
  // console.log("you can win");
}
// যদি এই দুইটি  কথার মধ্যে কোন কথা সত্যি না হয় তাহলে এই উত্তর আসবে ।
else {
  // console.log("you cannot win");
}

// *৩য় নিয়ম 
var isGraduated = true;
var salary = 5000;
var car = 1;
// যদি একসাথে তিনটি বিষয় সত্যি তাহলে এই লেখা আসবে ।
if ((isGraduated == false && salary > 5000) || car <= 0) {
  // console.log("you can sine");
}
// যদি একসাথে তিনটি বিষয় সত্যি না হয় তাহলে এই লেখা আসবে ।
else {
  // console.log("you cannot sine");
}

// *৪র্থ নিয়ম 
var money = 50;
var chicken = 35;
var tost = 45;
var cock = 40;
// এই নিয়মে যেকোন একটা শত ঠিক হলে বাকি শত গুলো আপ্লয় হয় না ।
if (chicken > money) {
  // console.log("ami cicken khabo");
}
else if (tost < money) {
  // console.log("ami tost khabo");
}
else if (cock > money) {
  // console.log("ami cock khabo");
}

// *৫ম নিয়ম 
var math = true;
var geometry = true;
// এই নিয়মে আমরা চাইলে একটি if else এর ভিতরে আরেকটি if else বসাতে পারি ।
if (math == true) {
  if (math == true && geometry == true) {
    // console.log("i will gainner")
  }
  else {
    //  আমরা এখানে চাইলে কিছু লিখতে পারি ।
  }
}
else {
  if (math == false && geometry == false) {
    // console.log("i will not gainner")
  }
  else {
    //  আমরা এখানে চাইলে কিছু লিখতে পারি ।
  }
}

// speshal example of if else
var my_score = 85;
var tom_score = 66;
var jane_score = 95;
var peater_score = 56;
var jhone_score = 40;
if (80 <= []) {
  // console.log("a grade")
}
else if (60 <= []) {
  // console.log("b grde")
}
else if (50 <= []) {
  // console.log("c grade")
}
else if (40 <= []) {
  // console.log("d grade")
}
else if (39 <= []) {
  // console.log("f grade")
}

const userinformation = "alvi";
const userinput = "alvo";
if (userinformation.toLocaleUpperCase == userinput.toLocaleUpperCase) {
  // console.log(true);
}
else {
  // console.log(false);
}











// ৪। javascript এ loop যেভাবে কাজ করে ।

/////

// while loop বের করার একটা সাধারণ নিয়ম ।
var roastGiven = 0;
while (roastGiven < 7) {
  // console.log('rost den , please !!');
  // console.log(roastGiven);
  roastGiven++;
  // roastGiven = roastGiven + 1;
  // roastGiven += 1;
}

// for loop কে সংক্ষেপে লেখার নিয়ম ।
for (var roastGiven = 1; roastGiven <= 10; roastGiven++) {
  // console.log(roastGiven);
}

/////

// for loop কে আরোও সংক্ষেপে লেখার নিয়ম ।
for (var r = 5; r <= 15; r++) {
  // console.log(r);
}

for (var r = 5; r <= 15; r = r + 2) {
  // console.log(r);
}

for (var r = 5; r <= 15; r += 2) {
  // console.log(r);
}

const number50 = [2, 56, 445, 645, 353, 2424, 5636, 2355];

for (let i = 0; i < number50.length; i++) {
  number50[i];
  // console.log(number50);
}

// while loop বিজোড় সংখ্যা  বের করার একটা সাধারণ নিয়ম ।
var roastGiven = 1;
while (roastGiven <= 10) {
  // console.log(roastGiven);
  roastGiven = roastGiven + 2;
}

// while loop জোড় সংখ্যা  বের করার একটা সাধারণ নিয়ম ।
var roastGiven = 0;
while (roastGiven <= 10) {
  // console.log(roastGiven);
  roastGiven = roastGiven + 2;
}

// for loop এর দেওয়া condition পুরন না করে যদি আমরা আমাদের for loop শেষ করততে চাই তাহলে এ ক্ষেত্রে for loop এর ব্যবহার ।
for (var i = 1; i <= 25; i++) {
  // console.log(i);
  if (i >= 20) {
    break;
  }
}

// continue loop example
var numbers = [45, 34, 55, 67, 54, 34, 52, 50];
for (var i = 0; i < numbers.length; i++) {
  var numbers = numbers[i];
  if (numbers > 50) {
    continue;
  }
  // console.log(numbers)
}

// break loop example
var numbers = [45, 34, 55, 67, 54, 34, 52, 50];
for (var i = 0; i < numbers.length; i++) {
  var numbers = numbers[i];
  if (numbers > 50) {
    break;
  }
  // console.log(numbers)
}


// while loop reverce way তে পরিচালনা করার ক্ষেত্রে while loop এর ব্যবহার ।
for (var num = 10; num >= 1; num--) {
  // console.log(num);

}

// while loof কে আরোও সক্ষেপে লেখার নিয়ম ।
const al = [24, 56, 78, 45, 73, 39];
for (const mahamud of al) {
  // console.log(al);
}

const ali = [24, 56, 78, 45, 73, 39];
for (const { } of al) {
  // console.log(al);
}

// loop কে সংক্ষেপে লিখেতে গেলে সে ক্ষেত্রে নিচের নিয়ম লিখেতে হবে ।
const color = ' ';
switch (color) {
  case 'green':
    // console.log('you are green my friend');
    break
  case 'blue':
    // console.log('you are blue my friend');
    break
  case 'white':
    // console.log('you are white my friend');
    break
  case 'red':
    // console.log('you are red my friend');
    break
  case 'yellow':
    // console.log('you are yellow my friend');
    break
  default:
  // console.log('you are my black black friend');
}












// ৫। javascript এ function যেভাবে কাজ করে ।

// function চালু করার সাধারণ নিয়ম ।
function starting(money) {
  // console.log('alvi al mahmud');
  // console.log(money);
}
starting(100)

// function add করতে চাইলে সে ক্ষেত্রে function এর ব্যবহার ।
function starting(num1, num2) {
  // console.log('going to add :', num1, num2);
}
starting(100, 200);


function nameinfo(name1, name2) {
  // console.log('our both name is ', name1, name2)
}
nameinfo("alvi", "khan")

// বাইরের কোন Variable কে function Paramiter এর মান হিসেবে দেখাতে চাইলে সে ক্ষেত্রে function এর ব্যবহার ।
function namedata(info) {
  // console.log('my name is', info)
}

var peopleName = 'alvi';
namedata(peopleName);


function numberdata(info) {
  // console.log('my number is', info)
}
var peopleNumber = 100;
numberdata(peopleNumber);

// function একধিক মান সেট করার নিয়ম ।
function sum(a, b, c, d, e) {
  // console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  // console.log(sum);
}
sum(23, 34, 54, 35, 64);

// function এ কোন কিছু ফেরত পেতে গেলে সে ক্ষেত্রে return এর ব্যবহার ।
function add(alvi1, alvi2) {
  // console.log(alvi1, alvi2);
  var sum = alvi1 + alvi2;
  return sum;
}
var total = add(10, 15);
// console.log('total', total)

// good externalpe of return function
function egg(money) {
  var eggPrice = 10;
  var quantity = money / eggPrice;
  return quantity;
}
var totalEgg = egg(300);
// console.log('totalEgg :', totalEgg);

// const এর ভিতরে একাধিক মান বের করার নিয়ম ।

const assigment1 = 55;
const assigment2 = 42;
const assigment3 = 56;
function getAvarage
  (assigment1, assigment2, assigment3) {
  const total = assigment1 + assigment2 + assigment3;
  const getAvarage = total / 3;
  return getAvarage;
}
const totalAvarage = getAvarage(assigment1, assigment2, assigment3);
// console.log(totalAvarage);

// এই arguments logic টি শধু function এর ক্ষেত্রে ব্যবহার করা যায ।
function arguments(num1, num2) {
  // console.log(num1, num2, arguments)
}
arguments(3, 4, 3, 4, 5, 56, 43, 345, 566, 3455,)

function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var result1 = add(12, 14);
var result1 = add(34, 43);
const finalresult = add(result1, result1);
// console.log(finalresult);


// importent function example.
function inchTofeet(inches) {
  const feet = inches / 12;
  return feet;
}
var dadaInches = 144;
var dadafeet = inchTofeet(dadaInches);
// console.log(dadafeet);

var dadiInches = 144;
var dadifeet = inchTofeet(dadiInches);
// console.log(dadifeet);

function milestone(kilometer) {
  var lenght = kilometer * 1.60934;
  return lenght;
}
const mykilometer = 5;
const mymilestone = milestone(mykilometer);
// console.log(mymilestone);

const herkilometer = 5;
const hermilestone = milestone(herkilometer);
// console.log(hermilestone);

function isEvnt(number) {
  const eventodd = number % 2;
  // // console.log(eventodd);
  if (eventodd == 0) {
    // console.log('this is a event nunber =', number);
  }
  else {
    // console.log('this is a odd numberc =', number);
  }
}
isEvnt(44);

function lepyear(year) {
  const YearCount = year % 4;
  if (YearCount == 0) {
    // console.log("this is a leap year =", year);
  }
  else {
    // console.log("this is just a normal year =", year)
  }
}
lepyear(2022);

const mynumbers = [5, 65, 45, 78, 32, 45, 91];
function getsumofanarray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    sum = sum + element;
    // console.log(index, element, sum);
  }
  return sum;
}
getsumofanarray(mynumbers);

// find eventodd :even
const MyNumbers = [24, 56, 78, 45, 73, 39];
function getevenNumbersofAnArray(numbers) {
  const evennumder = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    if (element % 2 === 0) {
      // console.log(index, element);
      evennumder.push(element);
    }
  }
  return evennumder;
}
// let evenumber = getevenofanarray(evenumber);
getevenNumbersofAnArray(MyNumbers);

// normal fuction 
function normalfactorial(number) {
  for (let i = 0; i <= number; i++) {
    // console.log(i)
  }
}

//reverce fuction
function revrcefactiorial(number) {
  for (let i = number; i >= 1; i--) {
    // console.log(i);
  }
}

// factorial for loop function
function fatorial1(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    console.log(i)
  }
  return result;
}
const number1 = 5;
const fact1 = fatorial1(number1);
console.log('factorial of', number1, fact1);

//factorial while loop fuction
function factorial2(number) {
  let i = 1;
  let result = 1;
  while (i >= number) {
    result = result * i;
    i--;
  }
  return result;
}
const number2 = 10;
const fact2 = factorial2(number2);
console.log('factoaril2 of', number2, fact2);


// find eventodd :odd
const my_numbers = [24, 56, 77, 45, 78, 99];
function getOddNumbersofAnArray(numbers) {
  const oddnumber = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    if (element % 2 !== 0) {
      // console.log(index, element);
      oddnumber.push(element);
    }
  }
  return oddnumber
}
// let oddnumder = getoddnumbersofarray (oddnumder)
getOddNumbersofAnArray(my_numbers);

// string and revece string
function reversestring1(text1) {
  for (a = 0; a < text1.length; a++) {
    const element1 = text1[a];
    return (element1);
  }
}
const myString1 = 'i am a good boy';
const reverce1 = reversestring1(myString1);
// return reverce1

function reversestring2(text2) {
  for (i = text2.length - 1; i >= 0; i--) {
    const element2 = text2[i];
    return (element2);
  }
}
const myString2 = 'i am a good boy';
const reverce2 = reversestring2(myString2);
// return reverce2


// calculate sum of numbers using recursion
function sum(i) {
  if (i == 1) {
    return 1;
  }
  else
    return i + sum(i - 1);
}
const result = 5;
// console.log(result);

const result10 = foctorial1(5);
function foctorial1(i) {
  if (i == 1) {
    return 1;
  }
  // else
  return i * foctorial1(i - 1);
}
// console.log(result10);


















// ৬। javascript এ objecct যেভাবে কাজ করে ।

// সাধারনত objecct যেভাবে লিখে ।
var student = {
  id: 66242,
  information: 'alvi al mahmud',
  class: 9,
  marks: 95,
}

// object এর মান পরিবতিন করার নিয়ম ।
student.class = 10;
// console.log(student);

// object এর কোন একটি propaty মান দেখেতে চাইলে সে ক্ষেত্রে object এর ব্যবহার ।
// console.log(student.information)

// object এর সব propaty এর নাম Array এর ভিতরে String আকারে পেতে চাইলে , সে ক্ষেত্রে object এর ব্যবহার ।
var proparts = Object.keys(student);
// console.log(proparts);

//object এর সব propaty এর মান Array এর ভিতরে মান আকারে পেতে চাইলে , সে ক্ষেত্রে object এর ব্যবহার ।
var proparty = Object.values(student);
// console.log(proparty);

// importent object example.

// Object এ for loop এর ব্যবহার ।

var shoppingcart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
}

// long term
var keys = Object.keys(shoppingcart);
// console.log(keys);

var values = Object.values(shoppingcart);
// console.log(values);

for (i = 0; i < keys.length; i++) {
  var propartyinformation = keys[i];
  var propatyValue = values[i];
  // console.log(propartyinformation, propatyValue);
}

// short term
var shoppingcart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
}

for (var propartyinformation in shoppingcart) {
  const values = shoppingcart[propartyinformation];
  // console.log(propartyinformation, values);
}

var Array = ['alvi :', 54, 'apu :', 45];
// console.log(Array);

var shoppingcart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
}
// console.log(shoppingcart);

const products = [
  { id: 1, Productsinformation: "xiani phones", productsPrice: 1500 },
  { id: 2, Productsinformation: "samsumg phones", productsPrice: 1500 },
  { id: 3, Productsinformation: "iphone phones", productsPrice: 1500 },
  { id: 4, Productsinformation: "premax phones", productsPrice: 1500 },
  { id: 5, Productsinformation: "xiani lapTop", productsPrice: 1500 },
  { id: 6, Productsinformation: "samsumg lapTop", productsPrice: 1500 },
  { id: 7, Productsinformation: "iphone lapTop", productsPrice: 1500 },
  { id: 8, Productsinformation: "premax lapTop", productsPrice: 1500 }
];

function machedProducts(products, search) {
  const mached = [];
  for (const product of products) {
    if (product.Productsinformation.toLowerCase().includes(search.toLowerCase())) {
      mached.push(products);
    }
  }
  return mached;
}
const result25 = machedProducts(products, "phones");
// console.log(result25);

                                              //JAVASCRIPT Basic Toturial END