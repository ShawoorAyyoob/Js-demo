const numbers = [4, 7, 12, 15, 9];
let mdfNum = numbers.map((n) => (n % 2 == 0 ? n * 2 : n + 1));
console.log(mdfNum);

let numDesc = numbers.map((n) => (n % 2 == 0 ? "Even" : "Odd"));
console.log(numDesc);
