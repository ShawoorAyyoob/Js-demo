let sum = 0;
let str = 'Sum of ';
let remainder;
for (let i = 1; i <= 10; i++) {
    remainder = i % 2;   
    if (remainder == 1) {
        sum = sum + i;
        str = str + i + ' ';
    }   
}
console.log(str + 'is ' + sum)