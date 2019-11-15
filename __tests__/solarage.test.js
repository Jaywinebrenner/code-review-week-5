import { mercuryExpectancy, mercuryAge, venusAge, marsAge, jupiterAge, saturnAge, uranusAge, neptuneAge, PlanetExpectancy } from './../src/solarage.js';


// describe('Solar Age planet testing', () => {
//
//   test('should correctly return the inputted Earth age in Mercury Age', () => {
//     var userMercuryAge = mercuryAge(40);
//     expect(userMercuryAge).toEqual(166.7);
//   });
//   test('should correctly return the inputted Earth age in Venus Age', () => {
//     var userVenusAge = venusAge(40);
//     expect(userVenusAge).toEqual(64.5);
//   });
//   test('should correctly return the inputted Earth age in Mars Age', () => {
//     var userMarsAge = marsAge(40);
//     expect(userMarsAge).toEqual(21.3);
//   });
//   test('should correctly return the inputted Earth age in Jupiter Age', () => {
//     var userJupiterAge = jupiterAge(40);
//     expect(userJupiterAge).toEqual(3.4);
//   });
//   test('should correctly return the inputted Earth age in Saturn Age', () => {
//     var userSaturnAge = saturnAge(40);
//     expect(userSaturnAge).toEqual(1.4);
//   });
//   test('should correctly return the inputted Earth age in Uranus Age', () => {
//     var userUranusAge = uranusAge(40);
//     expect(userUranusAge).toEqual(.48);
//   });
//   test('should correctly return the inputted Earth age in Neptune Age', () => {
//     var userNeptuneAge = neptuneAge(40);
//     expect(userNeptuneAge).toEqual(.24);
//   });
// });


describe('Determines how many solar years one has left to live', () => {

  test('should correctly return how many Mercury years one has left to live', () => {
    var mercuryYearsLeft = new PlanetExpectancy(74, 20);
    expect(mercuryYearsLeft.calculateExpectancyMercury()).toEqual(225);
  });
});
