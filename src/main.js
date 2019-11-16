import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { mercuryAge, venusAge } from './../src/solarage.js';

$(document).ready(function(){
  $("#mercuryForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForMercury = $("#mercuryInput").val();
    let mercuryAgeOutput = mercuryAge(earthAgeInputForMercury);
    $("#mercurySpan").html(" " + mercuryAgeOutput + " years");
  });
});

$(document).ready(function(){
  $("#venusForm").submit(function(event){
    event.preventDefault();
    let earthAgeInputForVenus = $("#venusInput").val();
    let venusAgeOutput = venusAge(earthAgeInput);
    $("#venusSpan").html(" " + venusAgeOutput + " years");
  });
});
