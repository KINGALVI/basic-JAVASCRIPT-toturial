const lagest = [100, 200, 300, 400, 500]

function lagestSum(lagestNumber) {
    let larger = lagestNumber[0];

    for (let i = 0; i < lagestNumber.length; i++) {
        const index = i;
        const element = lagestNumber[index];
        if (element > lagestNumber) {
            lagestNumber = element;
        }
    }

    return larger;
}

const lagestResult = lagestSum(lagest);
// console.log(lagestResult);





const fibo = [0, 1];

for (let i = 2; i <= 12; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

// console.log(fibo);





// includs example ;

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