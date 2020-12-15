// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let launchStatus = document.getElementById("launchStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   form.addEventListener("submit", function(event){
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
      }
      else if(isNaN(pilotName.value) && isNaN(copilotName.value) && !isNaN(Number(fuelLevel.value)) && !isNaN(Number(cargoMass.value))){

         if(Number(fuelLevel.value) < 10000 || Number(cargoMass.value) > 10000){
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            
            if(Number(fuelLevel.value) < 10000){
               fuelStatus.innerHTML = "Fuel level too low for launch";
            }
            if(Number(cargoMass.value) > 10000){
               cargoStatus.innerHTML = "Cargo mass too great for shuttle to launch";
            }
         }

         else{
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         }
      }
      else{
         alert("Make sure to enter valid information for each field!");
      }
      event.preventDefault();

   });
    
});
