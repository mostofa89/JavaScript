class Triangle {
    #base;
    #height;
    #area;

    constructor(base, height) {
        this.#base = base;
        this.#height = height;
        this.#area = 1/2 * this.#base * this.#height;
        
    }


    getArea() {
        return this.#area;

    }


    setBase(newBase) {
        this.#base = newBase;
        this.#area = 1/2 * this.#base * this.#height;

    }


    setHeight(newHeight) {
        this.#height = newHeight;
        this.#area = 1/2 * this.#base * this.#height;

    }


    getBase() {
        return this.#base;

    }


    getHeight() {
        return this.#height;
    }


}


// Example usage:
console.log("=========================");
let triangle = new Triangle(5, 10);
console.log(`Initial area: ${triangle.getArea()}`);
triangle.setBase(8);
triangle.setHeight(12);
console.log(`New base: ${triangle.getBase()}`);
console.log(`New height: ${triangle.getHeight()}`);
console.log(`New area: ${triangle.getArea()}`);
console.log("=========================");

