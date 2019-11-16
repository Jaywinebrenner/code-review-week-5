import { PlanetAgeCalculator, PlanetExpectancy } from './../src/solarage.js';


describe('Solar Age planet testing', () => {

  test('should correctly return the inputted Earth age in Mercury Age', () => {
    let userMercuryAge = new PlanetAgeCalculator(40);
    expect(userMercuryAge.mercuryAge()).toEqual(166.7);
  });
  test('should correctly return the inputted Earth age in Venus Age', () => {
    let userVenusAge = new PlanetAgeCalculator(40);
    expect(userVenusAge.venusAge()).toEqual(64.5);
  });
  test('should correctly return the inputted Earth age in Mars Age', () => {
    let userMarsAge = new PlanetAgeCalculator(40);
    expect(userMarsAge.marsAge()).toEqual(21.3);
  });
  test('should correctly return the inputted Earth age in Jupiter Age', () => {
     let userJupiterAge = new PlanetAgeCalculator(40);
    expect(userJupiterAge.jupiterAge()).toEqual(3.4);
  });
  test('should correctly return the inputted Earth age in Saturn Age', () => {
    let userSaturnAge = new PlanetAgeCalculator(40);
    expect(userSaturnAge.saturnAge()).toEqual(1.4);
  });
  test('should correctly return the inputted Earth age in Uranus Age', () => {
    let userUranusAge = new PlanetAgeCalculator(40);
    expect(userUranusAge.uranusAge()).toEqual(.48);
  });
  test('should correctly return the inputted Earth age in Neptune Age', () => {
    let userNeptuneAge = new PlanetAgeCalculator(40);
    expect(userNeptuneAge.neptuneAge()).toEqual(.24);
  });
});


describe('Determines how many solar years one has left to live and returns amount of solar years already surpassing life expectancy if so', () => {

  test('should correctly return how many Mercury years one has left to live and return the amount of years already surpassing life expectancy', () => {
    let mercuryYearsLeft = new PlanetExpectancy(74, 80);
    expect(mercuryYearsLeft.allLifeExpectancyMercury()).toEqual("You have lived " + 25 + " Mercury years past your life expectancy. Good luck!");
  });
  test('should correctly return how many Venus years one has left to live and return the amount of years already surpassing life expectancy', () => {
    let venusYearsLeft = new PlanetExpectancy(74, 80);
    expect(venusYearsLeft.allLifeExpectancyVenus()).toEqual("You have lived " + 9.7 + " Venus years past your life expectancy. Good luck!");
  });
  test('should correctly return how many Mars years one has left to live and return the amount of years already surpassing life expectancy', () => {
    let marsYearsLeft = new PlanetExpectancy(74, 80);
    expect(marsYearsLeft.allLifeExpectancyMars()).toEqual("You have lived " + 3.2 + " Mars years past your life expectancy. Good luck!");
  });
  test('should correctly return how many Jupiter years one has left to live and return the amount of years already surpassing life expectancy', () => {
    let jupiterYearsLeft = new PlanetExpectancy(74, 80);
    expect(jupiterYearsLeft.allLifeExpectancyJupiter()).toEqual("You have lived " + .5 + " Jupiter years past your life expectancy. Good luck!");
  });
  test('should correctly return how many Saturn years one has left to live and return the amount of years already surpassing life expectancy', () => {
    let saturnYearsLeft = new PlanetExpectancy(74, 80);
    expect(saturnYearsLeft.allLifeExpectancySaturn()).toEqual("You have lived " + .2 + " Saturn years past your life expectancy. Good luck!");
  });
  test('should correctly return how many Uranus years one has left to live and return the amount of years already surpassing life expectancy', () => {
    let uranusYearsLeft = new PlanetExpectancy(74, 80);
    expect(uranusYearsLeft.allLifeExpectancyUranus()).toEqual("You have lived " + .07 + " Uranus years past your life expectancy. Good luck!");
  });
  test('should correctly return how many Neptune years one has left to live and return the amount of years already surpassing life expectancy', () => {
    let neptuneYearsLeft = new PlanetExpectancy(74, 80);
    expect(neptuneYearsLeft.allLifeExpectancyNeptune()).toEqual("You have lived " + .04 + " Neptune years past your life expectancy. Good luck!");
  });

});
