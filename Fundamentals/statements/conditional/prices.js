{
    let price = 150;
    if (price < 100){
        console.log(price, "is a cheap price.");
        
    }else if (price >= 100 && price <= 200){
        console.log(price, "is a moderate price.");

    }else if (price > 200 && price <= 500){
        console.log(price, "is an expensive price.");

    }
    else{
        console.log(price, "is a very expensive price.");
    }
}