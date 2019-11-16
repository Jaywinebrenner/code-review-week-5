import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { mercuryExpectancy, mercuryAge, venusAge, marsAge, jupiterAge, saturnAge, uranusAge, neptuneAge, PlanetExpectancy } from './../src/solarage.js';

$(document).ready(function(){
  $("#marsForm").submit(function(event){
    event.preventDefault();
    let earthAgeInput = $("mercuryInput").val();
    let mercuryAgeOutput = mercuryAge(earthAgeInput);
    $("#mercurySpan").text(mercuryAgeOutput);


  });
});
