//Exercise 2
let lightBulbStatus = "Broken";

// Start coding here.

let message

    if (lightBulbStatus === "On") {
        message = "Light bulb is On.";
    } else if (lightBulbStatus === "Broken") {
        message =  "Light bulb is Broken."
    } else {
        message = "Please choose the correct input (On/Off/Broken)";
    }

console.log (message);
