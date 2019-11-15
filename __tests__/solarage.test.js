import { mercuryExpectancy, mercuryAge, venusAge, marsAge, jupiterAge, saturnAge, uranusAge, neptuneAge, PlanetExpectancy } from './../src/solarage.js';


describe('Solar Age planet testing', () => {

  test('should correctly return the inputted Earth age in Mercury Age', () => {
    let userMercuryAge = mercuryAge(40);
    expect(userMercuryAge).toEqual(166.7);
  });
  test('should correctly return the inputted Earth age in Venus Age', () => {
    let userVenusAge = venusAge(40);
    expect(userVenusAge).toEqual(64.5);
  });
  test('should correctly return the inputted Earth age in Mars Age', () => {
    let userMarsAge = marsAge(40);
    expect(userMarsAge).toEqual(21.3);
  });
  test('should correctly return the inputted Earth age in Jupiter Age', () => {
     let userJupiterAge = jupiterAge(40);
    expect(userJupiterAge).toEqual(3.4);
  });
  test('should correctly return the inputted Earth age in Saturn Age', () => {
    let userSaturnAge = saturnAge(40);
    expect(userSaturnAge).toEqual(1.4);
  });
  test('should correctly return the inputted Earth age in Uranus Age', () => {
    let userUranusAge = uranusAge(40);
    expect(userUranusAge).toEqual(.48);
  });
  test('should correctly return the inputted Earth age in Neptune Age', () => {
    let userNeptuneAge = neptuneAge(40);
    expect(userNeptuneAge).toEqual(.24);
  });
});


describe('Determines how many solar years one has left to live', () => {

  test('should correctly return how many Mercury years one has left to live', () => {
    let mercuryYearsLeft = new PlanetExpectancy(74, 20);
    expect(mercuryYearsLeft.calculateExpectancyMercury()).toEqual(225);
  });
  test('should correctly return how many Venus years one has left to live', () => {
    let venusYearsLeft = new PlanetExpectancy(74, 20);
    expect(venusYearsLeft.calculateExpectancyVenus()).toEqual(87.1);
  });
  test('should correctly return how many Mars years one has left to live', () => {
    let marsYearsLeft = new PlanetExpectancy(74, 20);
    expect(marsYearsLeft.calculateExpectancyMars()).toEqual(28.7);
  });
  test('should correctly return how many Jupiter years one has left to live', () => {
    let jupiterYearsLeft = new PlanetExpectancy(74, 20);
    expect(jupiterYearsLeft.calculateExpectancyJupiter()).toEqual(4.6);
  });
  test('should correctly return how many Jupiter years one has left to live', () => {
    let saturnYearsLeft = new PlanetExpectancy(74, 20);
    expect(saturnYearsLeft.calculateExpectancySaturn()).toEqual(1.9);
  });
  test('should correctly return how many Uranus years one has left to live', () => {
    let uranusYearsLeft = new PlanetExpectancy(74, 20);
    expect(uranusYearsLeft.calculateExpectancyUranus()).toEqual(.64);
  });
  test('should correctly return how many Neptune years one has left to live', () => {
    let neptuneYearsLeft = new PlanetExpectancy(74, 20);
    expect(neptuneYearsLeft.calculateExpectancyNeptune()).toEqual(.33);
  });

});
