// Dog Years

const myAge = 49;

let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

const myName = 'Kamran Fazal'.toLowerCase();

console.log(
	`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
