class Cube {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    calculateArea() {
      return 6 * Math.pow(this.sideLength, 2);
    }
  
    calculatePerimeter() {
      return 12 * this.sideLength;
    }
  }
  
  var sideLength = parseFloat(prompt("Enter the size of the sides of the cube:"));
  
  var myCube = new Cube(sideLength);
  
  console.log("Cube Area:", myCube.calculateArea());
  console.log("Cube Perimeter:", myCube.calculatePerimeter());
  