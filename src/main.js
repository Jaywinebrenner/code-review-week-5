// Hi! I made a branch to make this functional and to change the normal function of the Solar age input into a class. I did the class for the life expectancy in the original upload on Friday, but wanted to swith because I got paranoid it would refelct negatively, even though I did have a fully tested class / prototype in the original upload. ANYHOW, I did a lot of changes in the branch. Just a heads up!


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
