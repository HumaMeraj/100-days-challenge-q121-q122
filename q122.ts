//Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

// Initializes the counter at 10

let counter: number = 10;
                         // This while loop counts down from 10 to 1 and stops at 5
while (counter > 0) {
    if(counter === 5) {
        break;                       // Exits the loop when counter reaches 5
    }
    console.log(counter);
    counter--;
    }
    
// Logs the countdown from 10 but stops abruptly when it hits 5.
