class Shape {
    constructor(color) {

        if (this.constructor === Shape) {
            throw new Error("Abstract class cannot be instantiated");
            
        }
        this.color = color;

    }
    
    // Abstract method
    calculateArea() {
        throw new Error("Abstract method must be implemented");
    }
    

    // Concrete method
    getColor() {
        return this.color;

    }

}


class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;

    }
    
    calculateArea() {
        return Math.PI * this.radius ** 2;

    }
}


class Rectangle extends Shape {

    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;

    }
    
    calculateArea() {
        return this.width * this.height;

    }

}

// const shape = new Shape('red');  // Error: Abstract class cannot be instantiated
const circle = new Circle('blue', 5);
console.log(circle.calculateArea());  // 78.54...
console.log(circle.getColor());       // blue