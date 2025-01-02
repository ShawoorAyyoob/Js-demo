let fib = [];
let first = 0;
let second = 1;
fib.push(first);
fib.push(second);
for (let i = 1; i <= 5; i++) {
  let sum = first + second;
  fib.push(sum);
  first = second;
  second = sum;
}
console.log(fib);
