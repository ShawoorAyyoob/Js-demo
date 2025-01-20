let printMult = (n) => {
  for (let i = 1; i <= 10; i++)
    console.log(`Multiples of ${n} * ${i} = ${n * i}`);
};

let mult = [2, 3, 4, 5, 6];
for (let i = 0; i < mult.length; i++) {
  printMult(mult[i]);
  console.log();
}
