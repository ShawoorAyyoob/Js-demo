// function printOddeven(n){
//     n % 2 == 0 ? console.log('Even'): console.log('Odd');
// }
// printOddeven(7)


// let areaRect = (l, b) => {
//   console.log(`${l} * ${b} = ${(l * b)}`);
// }
// areaRect(5, 10);


// let squareD = n => n * n;
// console.log(squareD(5))


let printFact = n =>{
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(`${n} = ${fact}`)
};
printFact(4);