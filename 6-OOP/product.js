class Product {
  name;
  price;
  quantity;

  constructor(n, p, q) {
    this.name = n;
    this.price = p;
    this.quantity = q;
  }

  calculateTotalValue() {
    console.log(`Total price is ${this.price * this.quantity}`);
  }
  applyDiscount(discountPercentage){
    console.log(`Initial price ${this.price} `);
    const discount = this.price * discountPercentage/100;
    this.price = this.price - discount ;
    console.log(`Discounted price ${this.price} `);
  }
  restock(newQuantity){
    console.log(`Initial Stock ${this.quantity}`);
    this.quantity = this.quantity + newQuantity;
    console.log(`Updated Stock ${this.quantity}`);   
  }
}
const product1 = new Product("Oud", 100, 10);
const product2 = new Product("Bakhoor", 50, 20);
const product3 = new Product("Rasasi", 250, 30);

product1.calculateTotalValue();
product2.applyDiscount(10);
product3.restock(10);