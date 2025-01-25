class Rectangle {
<<<<<<< HEAD:Github.com/6-OOP/asg-1.js
    constructor(height, width) {
      this.height = height; 
      this.width = width;  
    }
  
    calArea() {
      let area = this.height * this.width;
      return area; 
    }
    
    strPattern(char){
      let str = '';
      for (let i = 1; i <= this.width ; i++) {
        str = str + '' + char;
      }  
      for (let i = 1; i <= this.height; i++) {
        console.log(str);
      }
    }
  }
const rect2 = new Rectangle(4,3);
rect2.calArea();
rect2.strPattern('#');
=======
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
>>>>>>> 6a60b9ebe42c7a3c4290b8cef0b6349ee95dd715:6-OOP/asg-1.js
