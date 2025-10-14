{
    let i = 1;
    while (i <= 5) {
        console.log(i);
        if (i === 3) {
            continue; // Exit the loop when i is 3
        }

        i++;
    }
}