//Exercise 4
// Switch Statement
let lightBulbStatus = "Broken";

//Start coding here

let message;

switch (lightBulbStatus) {
    case lightBulbStatus = "On":
        message = "Light bulb is On.";
        break;
    case lightBulbStatus = "Off":
        message = "Light bulb is Off."
        break;
    case lightBulbStatus = "Broken":
        message = "Light bulb is Broken."
        break;
    default:
        message = "Please choose the correct input (On/Off/Broken)"
        break;
}

console.log(message);