let fruits = ['Apple', 'Banana', 'Grape', 'Orange'];

let firstFruit = fruits.shift();
console.log(firstFruit)
console.log(fruits);


let position = fruits.indexOf('Grape');
console.log(position);


console.log(fruits.includes('Banana'));


let newFruits = fruits.slice(1,3);
console.log(newFruits);

let fruits1 = ['Melon','Guava'];
let fruits2 = ['Apple','Mango'];

combFruits = fruits1.concat(fruits2);
console.log(combFruits);