class Rectangle {
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