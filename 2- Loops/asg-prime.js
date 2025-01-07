let n = 6
let i = 2;
let prime = true;
while (i < n ) {
    let remainder = n % 2;
    if (remainder == 0){
         prime = false;
         break;
    }    
    i++;
}

if (prime == true) {
    console.log(`${n} is a prime number`);
} else {
    console.log(`${n} is not a prime number`);    
}