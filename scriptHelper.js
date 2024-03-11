// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const div = document.getElementById("missionTarget");
    div.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
      </ol>
      <img src="${imageUrl}"> 
      `;
 }
 
 // Check for Valid Inputs
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true ) {
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    // defining variables

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById('faultyItems');

    //Check for valid (non empty) inputs

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Please enter valid information for each field!");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Please enter valid information for each field!");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch!`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch!`
    }

    // Check for fuel Level

    if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        faultyItems.style.visibility = "visibile";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    // Check Cargo Mass

    if (cargoMass > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        faultyItems.style.visibility = "visibile";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
    // final check for both
    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }

}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();    
    });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;