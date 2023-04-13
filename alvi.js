//largest Number Math

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





//fibo Math

const fibo = [0, 1];

for (let i = 2; i <= 12; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

// console.log(fibo);





// Includs example ;

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





//foo + bar = foobar 

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




// Wood Calculator Math

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
    totalChairWood : perChairQuantity,
    toalTableWood : perTableQuantity,
    totalBedWood : perBedQuantity
  }
}


const totoalWoodCalculatorResult = woodCalculator(totalChair, totalTable, totalBed);
// console.log(totoalWoodCalculatorResult);
