import { mercuryAge, venusAge } from './../src/solarage.js';


describe('Mercury Age', () => {

  test('should correctly return the inputted Earth age in Mercury Age', () => {
    var userMercuryAge = mercuryAge(40);
    expect(userMercuryAge).toEqual(166.7);
  });
  test('should correctly return the inputted Earth age in Venus Age', () => {
    var userVenusAge = venusAge(30);
    expect(userVenusAge).toEqual(64.5);
  });


});

















// describe('Triangle', () => {
//
//   test('should correctly create a triangle object with three lengths', () => {
//     var triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
//   test('should correctly determine whether three lengths are not a triangle', () => {
//     var notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });
//   test('should correctly determine whether three lengths make a scalene triangle', function() {
//   var scalTriangle = new Triangle(4,5,7)
//   expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });
//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//   var isocTriangle = new Triangle(5,5,7)
//   expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   });
//   test('should correctly determine whether three lengths make an equalateral triangle', () => {
//   var equalTriangle = new Triangle(5,5,5)
//   expect(equalTriangle.checkType()).toEqual("equalateral triangle");
//   });
//   test('should correctly determine if anything other than a number is entered', () => {
//   var equalTriangle = new Triangle("triangle",[4],5)
//   expect(equalTriangle.checkType()).toEqual("please enter a real number");
//   });
//   test('should correctly determine if any negative number is entered', () => {
//   var equalTriangle = new Triangle(-1,3,5)
//   expect(equalTriangle.checkType()).toEqual("please enter a number greater than 0");
//   });
// });
