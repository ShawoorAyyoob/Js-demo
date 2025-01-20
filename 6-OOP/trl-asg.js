class traingle {
    constructor(b, h) {
        this.base = b;
        this.height = h;
    }

    area() {
        const area = 1/2 * this.base * this.height;
        return area;
    }
}
const myTrg = new traingle(5, 10);
console.log(`Area of Circle = ${myTrg.area()}`)