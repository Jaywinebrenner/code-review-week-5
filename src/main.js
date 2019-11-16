import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { PlanetAgeCalculator, PlanetExpectancy } from './../src/solarage.js';

$(document).ready(function(){
  $("#mercuryForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForMercury = $("#mercuryInput").val();
    let mercuryAgeOutput = mercuryAge(earthAgeInputForMercury);
    $("#mercurySpan").html(" " + mercuryAgeOutput + " years");
  });
  $("#venusForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForVenus = $("#venusInput").val();
    let venusAgeOutput = venusAge(earthAgeInputForVenus);
    $("#venusSpan").html(" " + venusAgeOutput + " years");
  });

  $("#marsForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForMars = $("#marsInput").val();
    let marsAgeOutput = marsAge(earthAgeInputForMars);
    $("#marsSpan").html(" " + marsAgeOutput + " years");
  });


});
