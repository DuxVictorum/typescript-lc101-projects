"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
// Part 1: Declare (5) Variables With Type
// const spaceCraftName: string = "Determination";
// let speedMph: number = 17500;
var SpaceLocation_1 = require("./SpaceLocation");
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
// const milesToMars: number = kilometersToMars * milesPerKilometer;
// const hoursToMars: number = milesToMars / speedMph;
// const daysToMars: number = hoursToMars / 24;
// Code an output statement here (use a template literal):
// console.log(`It will take ${spaceCraftName} approximately ${daysToMars} days to reach Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     const milesToLoc: number = milesPerKilometer * kilometersAway;
//     const daysToLoc: number = milesToLoc / speedMph / 24;
//     return daysToLoc;
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`It will take ${spaceCraftName} approximately ${getDaysToLocation(kilometersToMars)} days to reach Mars.`);
// console.log(`It will take ${spaceCraftName} approximately ${getDaysToLocation(kilometersToTheMoon)} days to reach Mars.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesToLoc = milesPerKilometer * kilometersAway;
        var daysToLoc = milesToLoc / this.speedMph / 24;
        return daysToLoc;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name);
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft("Determination", 17500);
var spacey2 = new Spacecraft("Fatso", 21057);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`It will take ${spaceShuttle.name} approximately ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars.`);
// console.log(`It will take ${spaceShuttle.name} approximately ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to reach Mars.`);
// console.log(`It will take ${spacey2.name} approximately ${spacey2.getDaysToLocation(kilometersToMars)} days to reach Mars.`);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("the Moon", kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
