const numbers = [10, 21, 30, 41, 50];
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(`Total = ${sum}`);

for (const number of numbers) {
    if (number % 2 != 0) {
        console.log(`Odd Numbers = ${number}`);
    }
}