//// largest Number Math


const lagest = [673, 3747, 574, 2748, 375, 3893, 373, 5873, 500, 8558];


function lagestSum(lagestNumber) {
  let larger = lagestNumber[0];
  let largerNumbers = [];

  for (let i = 0; i < lagestNumber.length; i++) {
    const index = i;
    const element = lagestNumber[index];
    if (element > larger) {
      larger = element;
      largerNumbers.push(element);
    }
  }

  return largerNumbers;
}


const lagestResult = lagestSum(lagest);
// console.log(lagestResult);










//// fibo Math


const fibo = [0, 1];


for (let i = 2; i <= 12; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}


// console.log(fibo);










//// Includs example 

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];


function removeDuplicate(names) {
  const unique = [];

  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (unique.includes(element) === false) {
      unique.push(element);
    }
  }

  return unique;
}


const newNameList = removeDuplicate(names);
// console.log(newNameList);










//// foo + bar = foobar 


for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log('foobar');
  }
  else if (i % 3 === 0) {
    // console.log('bar');
  }
  else if (i % 5 === 0) {
    // console.log('foobar');
  }
  else {
    // console.log(i);
  }
}










//// Wood Calculator Math


const totalChair = 5;
const totalTable = 10;
const totalBed = 15;


function woodCalculator(chairQuantity, tableQuantity, bedQantity) {


  const perChairQuantity = chairQuantity * 3;
  // console.log(`total Chair woood requerment is ${perChairQuantity}cft`);

  const perTableQuantity = tableQuantity * 10;
  // console.log(`total Tabel woood requerment is ${perTableQuantity}cft`);

  const perBedQuantity = bedQantity * 50;
  // console.log(`total Tabel woood requerment is ${perBedQuantity}cft`);


  return {
    totalChairWood: perChairQuantity,
    toalTableWood: perTableQuantity,
    totalBedWood: perBedQuantity
  }
}


const totoalWoodCalculatorResult = woodCalculator(totalChair, totalTable, totalBed);
// console.log(totoalWoodCalculatorResult);









//// Cheapest Phone Math


const phone = [
  { phoneName: 'Samsumg', camera: 12, stroage: '32gb', price: 36000, color: 'silver' },
  { phoneName: 'Walton', camera: 10, stroage: '32gb', price: 22000, color: 'silver' },
  { phoneName: 'Iphone', camera: 10, stroage: '32gb', price: 82000, color: 'silver' },
  { phoneName: 'Xaomi', camera: 10, stroage: '32gb', price: 52000, color: 'silver' },
  { phoneName: 'Oppo', camera: 10, stroage: '32gb', price: 20000, color: 'silver' },
  { phoneName: 'Nokia', camera: 10, stroage: '32gb', price: 44000, color: 'silver' },
  { phoneName: 'HTC', camera: 10, stroage: '32gb', price: 62000, color: 'silver' },
]


function cheapestPhone(Phones) {
  let cheapest = phone[0];
  const cheapestPhone = [];

  for (let i = 0; i < Phones.length; i++) {
    const phone = Phones[i];

    if (phone.price < cheapest.price) {
      cheapest = phone;
      cheapestPhone.push(phone);
    }
  }

  return cheapestPhone;
}


const mySelection = cheapestPhone(phone);
// console.log(mySelection);





//// Ticket Discount Math


// easy solution


const totalTicketPeople = [0];


if (totalTicketPeople <= 100) {
  // console.log(`total ticket price is ${totalTicketPeople * 100}tk`);
}
else if (totalTicketPeople > 100 && totalTicketPeople <= 200) {
  // console.log(`total ticket price is ${totalTicketPeople * 90}tk`);
}
else {
  // console.log(`total ticket price is ${totalTicketPeople * 70}tk`);
}


//advance solution


const TotalTicketPeople = [0];


function ticketPrice(ticketQuantity) {

  const first100Rate = 100;
  const secoend100To200Rate = 90;
  const restTicketRate = 70;


  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  }
  else if (ticketQuantity >= 100 && ticketQuantity <= 200) {
    const price = ticketQuantity * secoend100To200Rate;
    return price;
  }
  else {
    const price = ticketQuantity * restTicketRate;
    return price;
  }


}


const totalPrice = ticketPrice(TotalTicketPeople);
// console.log(totalPrice);










////


let sum1 = 0;

for (let i = 1; i <= 5; i++) {
  sum1 = sum1 + i;
}
// console.log(sum1);


let sum2 = 0;

for (let i = 5; i >= 1; i--) {
  sum2 = sum2 + i;
}
// console.log(sum2);










//// hwo to call a fuction into the function area 


const theSum = 5;


function sum(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum(i - 1);
}

const sumResult = sum(theSum);
// console.log(sumResult);