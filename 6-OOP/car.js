class car {
  brand;
  model;
  year;

  constructor(br, mo, yr) {
    this.brand = br;
    this.model = mo;
    this.year = yr;
  }
  displayDetails() {
    console.log(`This car is ${this.brand}, ${this.model}, ${this.year}`);
  }
}
let car1 = new car('Toyota','Rav 4','2025');

car1.displayDetails();
