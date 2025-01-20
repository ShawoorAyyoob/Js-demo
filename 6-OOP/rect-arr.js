class Rectangle {
  length;
  breadth;

  constructor(l, b) {
    this.length = l;
    this.breadth = b;
  }

  calcArea() {
    console.log(`Area of Rectangle is ${this.length * this.breadth}`);
  }
  calcPeri() {
    console.log(
      `Perimeter of Rectangle is ${2 * (this.length + this.breadth)}`
    );
  }
}
const rect2 = new Rectangle(5, 10);
const rect3 = new Rectangle(10, 20);
const rect4 = new Rectangle(15, 10);

const rectangles = [];
rectangles.push(rect2, rect3, rect4);
printArray(rectangles);
function printArray(rectangles) {
  for (const rectangle of rectangles) {
    console.log(`***********`);
    console.log(`Length = ${rectangle.length}`);
    console.log(`Breadth = ${rectangle.breadth}`);
    rectangle.calcArea();
    rectangle.calcPeri();
    console.log();
  }
}
