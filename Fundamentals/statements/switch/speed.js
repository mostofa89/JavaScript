{
    // Wrong way to use use switch for range checking
    // This will not work as intended
    // because switch compares values strictly
    let speed = 70;
    switch (speed){
        case 0-10:
            console.log("Very Slow");
            break;

        case 11-30:
            console.log("Slow");
            break;

        case 31-50:
            console.log("Moderate");
            break;

        case 51-70:
            console.log("Fast");
            break;

        case 71-90:
            console.log("Very Fast");
            break;

        case 91-120:
            console.log("Extremely Fast");
            break;

        default:
            console.log("Invalid speed");
            break;
    }
}