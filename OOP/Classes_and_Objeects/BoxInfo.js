class Box{
    constructor(width, height, depth){
        this.width = width;
        this.height = height;
        this.depth = depth;
    
    }


}



// Driver Code
console.log("=====================================")
let box1 = new Box(2, 3, 4);
console.log(`Box 1 - Width : ${box1.width}, Height : ${box1.height}, Depth : ${box1.depth}`);
console.log(`Volume of Box 1 : ${box1.width * box1.height * box1.depth}`);
console.log("=====================================")
let box2 = new Box(5, 6, 7);
console.log(`Box 2 - Width : ${box2.width}, Height : ${box2.height}, Depth : ${box2.depth}`);
console.log(`Volume of Box 2 : ${box2.width * box2.height * box2.depth}`);
console.log("=====================================")
let box3 = new Box(8, 9, 10);
console.log(`Box 3 - Width : ${box3.width}, Height : ${box3.height}, Depth : ${box3.depth}`);
console.log(`Volume of Box 3 : ${box3.width * box3.height * box3.depth}`);
console.log("=====================================")
box1.width = 10;
console.log(`Updated Width for Box 1 : ${box1.width}`);
console.log("=====================================")
box2.height = 15;
console.log(`Updated Height for Box 2 : ${box2.height}`);
console.log("=====================================")
