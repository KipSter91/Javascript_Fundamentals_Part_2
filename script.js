"use strict"
//  const yearsUntilRetirement = (birthYear, firstName) => {
//      const age = 2023 - birthYear;
//      const retirement = 67 - age;
//      return `${firstName} retires in ${retirement} years.`;
//  }

//  console.log(yearsUntilRetirement(1991, "Zsolt"));
//  console.log(yearsUntilRetirement(1987, "Barbara"));

const cutSlices = (fruit) => {
    return fruit * 2
}

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutSlices(apples);
    const orangePieces = cutSlices(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(154, 15));



const currentAge = (birthYear) => {
    return 2023 - birthYear;
}

const yearsToRetire = (age) => {
    return 67 - age;
}

const yearsUntilRetirement = (birthYear, firstName) => {

    const age = currentAge(birthYear);
    const retirement = yearsToRetire(age);
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired. `;
    }

}

console.log(yearsUntilRetirement(1991, "Zsolt"))

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);


const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }

    else if (avgDolphins * 2 < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No winner!");
    }
};

checkWinner(scoreDolphins, scoreKoalas)


// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);


const mark = {
    fullName: "Mark Miller",
    mass: 59,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

john.calcBMI()
mark.calcBMI()

console.log(`${john.fullName}'s BMI (${Math.floor(john.bmi)}) is ${john.bmi > mark.bmi ? "higher" : "lower"} than ${mark.fullName}'s BMI (${Math.floor(mark.bmi)})!`);

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
};

const barbaraArrey = [
    "Barbara",
    "Marku",
    1987,
    "lover",
    ["Fili", "Alfi", "Zsolti"],
    2017,
    true
];

const types = [];

for (let i = 0; i < barbaraArrey.length; i++) {
    //reading from barbaraArrey
    console.log(barbaraArrey[i]);
    //filling types arrey
    //types[i] = typeof barbaraArrey[i];
    types.push(typeof barbaraArrey[i])
}

console.log(types);

const years = [1991, 1987, 1966, 1952];
const ages = [];

for (let i = 0; i < years.length; i++) {

    ages.push(new Date().getFullYear() - years[i]);

}

console.log(ages);

//continue & break
console.log("---ONLY STRINGS---");
for (let i = 0; i < barbaraArrey.length; i++) {
    if (typeof barbaraArrey[i] !== "string") continue;

    console.log(barbaraArrey[i], typeof barbaraArrey[i]);
};

console.log("---BREAK WITH NUMBERS---");
for (let i = 0; i < barbaraArrey.length; i++) {
    if (typeof barbaraArrey[i] === "number") break;

    console.log(barbaraArrey[i], typeof barbaraArrey[i]);
};

//looping backwards
for (let i = barbaraArrey.length - 1; i >= 0; i--) {
    console.log(i, barbaraArrey[i]);
}

//loops in loops
for (let excersize = 1; excersize < 5; excersize++) {
    console.log(`Doing excersize Nr.${excersize}:`);

    for (let rep = 1; rep < 9; rep++) {
        if (rep <= 1) {
            console.log(`${rep} reputation.`);
        } else {
            console.log(`${rep} reputations.`);
        };
    };
}

//while loop
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You rolled a ${dice} so the loop is about to end...`);
};

//Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

//BONUS

const calcAvarage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
};

console.log(calcAvarage(totals));