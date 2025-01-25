class Product {
    name;
    price;
    stock;

    constructor(n, p, s) {
        this.name = n;
        this.price = p;
        this.stock = s;
    }
    
}
const products = [
    { name: "Laptop", price: 50000, stock: 15 },
    { name: "Mobile", price: 15000, stock: 8 },
    { name: "Headphones", price: 2000, stock: 20 },
    { name: "Keyboard", price: 1000, stock: 5 },
];
let filterProducts = products.filter((product) => product.stock > 10);
console.log(filterProducts);
let increasePrice = products.map((product) => product.price * 1.15);
console.log(`Increased Price = ${increasePrice}`);