class Car {
    brand;
    model;
    year;
    price;

    constructor(b, m, y, p) {
        this.brand = b;
        this.model = m;
        this.year = y;
        this.price = p;
    }
}

const car1 = new Car('Toyota', 'Camry', 2021, 5000);
const car2 = new Car('Honda', 'Civic', 2021, 6000);
const car3 = new Car('Nissan', 'Patrol', 2021, 7000);
const car4 = new Car('Lexus', 'LX570', 2021, 8000);
const car5 = new Car('Honda', 'Accord', 2021, 9000);
const car6 = new Car('GMC', 'Tahoe', 2021, 9500);

const cars = [];
cars.push(car1, car2, car3, car4, car5, car6);
console.log(cars);

let hondaCars = cars.filter(car => car.brand == 'Honda');
console.log(hondaCars);

let totalPrice = cars.reduce((total, car) => total + car.price, 0);

let averagePrice = totalPrice / 6;
console.log(`Average Price is ${averagePrice}`);