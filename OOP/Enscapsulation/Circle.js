class Circle {
    #radius;
    #volume;

    constructor(radius) {
        this.#radius = radius;
        this.#volume = (4/3) * Math.PI * Math.pow(this.#radius, 3);

    }


    getVolume() {
        return this.#volume;
    }


    setRadius(newRadius) {
        this.#radius = newRadius;
        this.#volume = (4/3) * Math.PI * Math.pow(this.#radius, 3);
    }


    getRadius() {
        return this.#radius;
    }


}



// Example usage:
console.log("=========================");
let circle = new Circle(5);
console.log(`Initial volume: ${circle.getVolume().toFixed(2)}`);
circle.setRadius(8);
console.log(`New radius: ${circle.getRadius().toFixed(2)}`);
console.log(`New volume: ${circle.getVolume().toFixed(2)}`);
console.log("=========================");