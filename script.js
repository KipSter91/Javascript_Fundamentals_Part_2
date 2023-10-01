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


const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


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


