// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha. Vorontsov
// Created on: March-April 2025
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function calculatehoursworkedAndhourlywage() {
  // input
  const TaxAmount= (4/3) 
  const radiusvalue = parseFloat(document.getElementById("radius").value);

  let radiusanswer = radiusvalue**3
  let takeHomeSalary = 4/3*Math.PI*radiusvalue**3
  
  document.getElementById('answer1').innerHTML = 
    `Radius: ${radiusanswer.toFixed(2)} <br>
    Volume: ${takeHomeSalary.toFixed(2)}`

}
