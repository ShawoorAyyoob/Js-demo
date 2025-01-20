class Rectangle {
  width;
  height;

  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
  calcArea() {
    console.log(`Area of rect = ${this.width * this.height}`);
  }
  pattern(patternChar,lines){
    let str = '';
    for (let i = 1; i <= lines ; i++) {
        str = str + ' '+ patternChar;
    }
    console.log(str);
  }
}
let result=new Rectangle(5,6);
result.pattern('*');
