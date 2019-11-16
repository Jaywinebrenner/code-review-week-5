// Hi! I worked on a branch to plumb the UI and make the site functional and merged it into master. Also, on my initial upload at 5, I had a class / contstructor for the life expectancy functionality and a normal functions for the solar age functionality. I got paranoid the normal functions wouldn't have been kosher as the ciriculem did state to use classes. I did use classes, just not ALL class. Anyhow, just a heads up. 


import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { PlanetAgeCalculator } from './../src/solarage.js';

$(document).ready(function(){
  $("#mercuryForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForMercury = $("#mercuryInput").val();
    let mercuryAge = new PlanetAgeCalculator(earthAgeInputForMercury);
    let mercuryAgeOutput = mercuryAge.mercuryAge();
    $("#mercurySpan").html(" " + mercuryAgeOutput + " years");
  });

  $("#venusForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForVenus = $("#venusInput").val();
    let venusAge = new PlanetAgeCalculator(earthAgeInputForVenus);
    let venusAgeOutput = venusAge.venusAge();
    $("#venusSpan").html(" " + venusAgeOutput + " years");
  });

  $("#marsForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForMars = $("#marsInput").val();
    let marsAge = new PlanetAgeCalculator(earthAgeInputForMars);
    let marsAgeOutput = marsAge.marsAge();
    $("#marsSpan").html(" " + marsAgeOutput + " years");
  });

  $("#jupiterForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForJupiter = $("#jupiterInput").val();
    let jupiterAge = new PlanetAgeCalculator(earthAgeInputForJupiter);
    let jupiterAgeOutput = jupiterAge.jupiterAge();
    $("#jupiterSpan").html(" " + jupiterAgeOutput + " years");
  });

  $("#saturnForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForSaturn = $("#saturnInput").val();
    let saturnAge = new PlanetAgeCalculator(earthAgeInputForSaturn);
    let saturnAgeOutput = saturnAge.saturnAge();
    $("#saturnSpan").html(" " + saturnAgeOutput + " years");
  });

  $("#uranusForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForUranus = $("#uranusInput").val();
    let uranusAge = new PlanetAgeCalculator(earthAgeInputForUranus);
    let uranusAgeOutput = uranusAge.uranusAge();
    $("#uranusSpan").html(" " + uranusAgeOutput + " years");
  });

  $("#neptuneForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForNeptune = $("#neptuneInput").val();
    let neptuneAge = new PlanetAgeCalculator(earthAgeInputForNeptune);
    let neptuneAgeOutput = neptuneAge.neptuneAge();
    $("#neptuneSpan").html(" " + neptuneAgeOutput + " years");
  });

});
