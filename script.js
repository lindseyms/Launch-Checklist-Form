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
   

   form.addEventListener("submit", function(event){
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
         event.preventDefault();
      }
      else if(!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
   });
    
});
