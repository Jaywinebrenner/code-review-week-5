

export function mercuryAge(earthAge){
  let preRound = earthAge / .24;
  return Math.round(preRound * 10) / 10;
}

export function venusAge(earthAge){
  let preRound = earthAge / .62;
  return Math.round(preRound * 10) / 10;
}

export function marsAge(earthAge){
  let preRound = earthAge / 1.88 ;
  return Math.round(preRound * 10) / 10;
}

export function jupiterAge(earthAge){
  let preRound = earthAge / 11.86 ;
  return Math.round(preRound * 10) / 10;
}

export function saturnAge(earthAge){
  let preRound = earthAge / 29 ;
  return Math.round(preRound * 10) / 10;
}






// export function Triangle (side1, side2, side3) {
  //   this.side1 = side1;
  //   this.side2 = side2;
  //   this.side3 = side3;
  // }
  // Triangle.prototype.checkType = function() {
    //   if ((this.side1 <= 0) || (this.side2 <= 0) || (this.side3 <= 0)) {
      //     return "please enter a number greater than 0"
      //   } else if ((isNaN(this.side1)) || (isNaN(this.side2)) || (isNaN(this.side3))) {
        //     return "please enter a real number";
        //   } else if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
          //     return "not a triangle";
          //   } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
            //     return "scalene triangle";
            //   } else if ((this.side1 === this.side2) && ((this.side1 === this.side3)) && ((this.side2 === this.side3))) {
              //     return "equalateral triangle";
              //   } else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
                //     return "isosceles triangle";
                //   }
                // };