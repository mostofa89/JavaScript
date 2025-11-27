class Sphere {

    constructor(id, redius = 1, color = "White") {
        this.id = id;
        this.redius = redius;
        this.color = color;
        this.volume = (4/3) * Math.PI * Math.pow(this.redius, 3); 
    }


    PrintDetails() {
        return `Sphere ID: ${this.id}\nRadius: ${this.redius}\nColor: ${this.color}\nVolume: ${this.volume.toFixed(2)}`;
    }



    MergeSphere(otherSphere) {
        let totalVolume = this.volume;
        for (let sphere of otherSphere) {
            totalVolume += sphere.volume;
            if (sphere.color !== this.color) {
                this.color = "Mixed";

            }else{
                this.color = this.color;
            }

        }
        this.volume = totalVolume;
        
    }


}


// Driver Code
console.log("=====================================");
let sphere1 = new Sphere(1, 3, "Red");
console.log(sphere1.PrintDetails());
console.log("=====================================");
let sphere2 = new Sphere(2, 4, "Blue");
console.log(sphere2.PrintDetails());
console.log("=====================================");
let sphere3 = new Sphere(3, 2, "Red");
console.log(sphere3.PrintDetails());
console.log("=====================================");
sphere2.MergeSphere([sphere3]);
console.log("After Merging Sphere 2 and Sphere 3 into Sphere 1:");
console.log(sphere1.PrintDetails());
console.log("=====================================");
sphere1.MergeSphere([sphere3]);
console.log("After Merging Sphere 2 and Sphere 1 into Sphere 1:");
console.log(sphere1.PrintDetails());
console.log("=====================================");