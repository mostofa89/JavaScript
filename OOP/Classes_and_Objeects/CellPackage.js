class CellPackage {

    constructor(price, data, talktime, mms_sms, discount, validity){
        this.price = price;
        this.data = data;
        this.talktime = talktime;
        this.mms_sms = mms_sms;
        this.discount = discount;
        this.validity = validity;
    }


}


// Driver Code
console.log(`============= Package 1 =============`)
let package1 = new CellPackage(150, '6 GB', 99, 20, '7%', 7);
console.log(`Price : $${package1.price}`);
console.log(`Data : ${package1.data}`);
console.log(`Talktime : ${package1.talktime}`);
console.log(`MMS/SMS : ${package1.mms_sms}`);
console.log(`Discount : ${(package1.discount.substring(0, package1.discount.length - 1) / 100 * package1.price).toFixed(2)}`);
console.log(`Validity : ${package1.validity}`);
console.log("=====================================")

console.log(`============= Package 2 =============`)
let package2 = new CellPackage(200, '8 GB', 149, 30, '10%', 10);
console.log(`Price : $${package2.price}`);
console.log(`Data : ${package2.data}`);
console.log(`Talktime : ${package2.talktime}`);
console.log(`MMS/SMS : ${package2.mms_sms}`);
console.log(`Discount : ${(package2.discount.substring(0, package2.discount.length - 1) / 100 * package2.price).toFixed(2)}`);
console.log(`Validity : ${package2.validity}`);
console.log("=====================================")

console.log(`============= Package 3 =============`)
let package3 = new CellPackage(250, '10 GB', 199, 40, '15%', 15);
console.log(`Price : $${package3.price}`);
console.log(`Data : ${package3.data}`);
console.log(`Talktime : ${package3.talktime}`); 
console.log(`MMS/SMS : ${package3.mms_sms}`);
console.log(`Discount : ${(package3.discount.substring(0, package3.discount.length - 1) / 100 * package3.price).toFixed(2)}`);
console.log(`Validity : ${package3.validity}`);
console.log("=====================================")