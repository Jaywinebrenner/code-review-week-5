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
    let venusAgeOutput = earthAgeInputForVenus.venusAge();
    $("#venusSpan").html(" " + venusAgeOutput + " years");
  });

  $("#marsForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForMars = $("#marsInput").val();
    let marsAgeOutput = earthAgeInputForMars.marsAge();
    $("#marsSpan").html(" " + marsAgeOutput + " years");
  });


});
