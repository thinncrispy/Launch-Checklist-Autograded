// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);   
    })
    
 });

 // Check for inputs and push into form submission
 window.onload = function() {
    const button = document.getElementById("formSubmit");

    button.addEventListener("click", function(event) {
        let pilot = document.querySelector("input[name=pilotName");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
    
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
        event.preventDefault();
    });
}

