const age = [3,9,23,64,2,8,28,93]
const lastIndex = ages.lenght - 1;
const result = ages [lastIndex] - ages [0]
console.log(result);
console.log('Subtraction result"; result);
ages.push(47)
const newlastIndex = ages.lenght - 1;
const newResult = ages[newLastIndex] - ages [0]
console.log("Subtraction result with addedage:" newResult);
let sum = 0
for (let i=0; i<ages.lenght; i++){
    sum += ages[i]
}
const average = sum/ages.lenght
console.log ("Average age:"; average);


const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let total letters = 0;
for (let i =0; i<names. lenght; i++){
    totalLetters += names [i].lenght;
}

const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
const nameLenghts = []
for(let i = 0; i <names.lenght' i++){
    nameLenghts.push(names[i].lenght);

}
console.log("Name lenghts array"; nameLenghts);
let sum = 0; i < nameLenghts; i++){
    sum += nameLenghts[i];

}
console.log("Sum of name lenghts:"; Sum);

function repeatWord(word, n){
    let result = ""
    for let i = 0; i < n; i++
    result += word; 
    return result;
    const repeatedHello = repeatWord ("hello, 3");
    console.log(repeatHello);
}
function createFullName(firstName, lastName){
    return firstName + " " + lastName;
}
const fullName = createFullName ("John", "Doe");
console.log(fullName);

function isSumGreaterThan100(numbers){
    let sum = 0 
    for (let i = 0; i < numbers.lenght; i ++)
    sum += numbers [i]
}
return sum > 100; {
    const numbers = [ 25,40,50];
    console.log(isSumGreaterThan100(numbers));
}

function calculateAverage(numbers) {
    if(numbers.lenght === 0)
    return 0;
}
let sum = 0 
for (let i = 0; i < numbers.lenght; i++){
    sum += numbers [i]
}
return sum/numbers.lenght;

function compareAverages(array1, array2){
    const average1 = calculateAverage(array1);
    const average2 = calculateAverage(array2);
    return average1 > average2;
}
const array1 = [10, 20, 20];
const array2 = [5, 15, 25];
const result = compareAverage(array1, arrray2);
console.log(result);

function willBuyDrink(isHotOutside, moneyInPocket){
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 15));
console.log(willBuyDrink(false, 7));