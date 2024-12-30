let a = 1;
let b = 1;
let sum = 0;
for (let i = 1; i < 8; i++) {
    a = b;
    b = a + sum;
    sum = sum + a;
    console.log(sum); 
}