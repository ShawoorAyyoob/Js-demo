let n = 5;
let fact = 1;
function calfact(n) {
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
let result = calfact(n);
console.log(`Factorial of ${n} = ${result}`);
