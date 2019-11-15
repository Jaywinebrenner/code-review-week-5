

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

export function uranusAge(earthAge){
  let preRound = earthAge / 84 ;
  return Math.round(preRound * 100) / 100;
}
export function neptuneAge(earthAge){
  let preRound = earthAge / 165 ;
  return Math.round(preRound * 100) / 100;
}

// export function mercuryExpectancy(lifeExpectancy, earthAge){
//   let earthYearsLeft = (lifeExpectancy - earthAge) / .24;
//   return Math.round(earthYearsLeft * 10) / 10;
// }

export class PlanetExpectancy {
  constructor(lifeExpectancy, earthAge) {
    this.lifeExpectancy = lifeExpectancy;
    this.earthAge = earthAge;
  }
  calculateExpectancyMercury(){
    let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / .24;
    return Math.round(earthYearsLeft * 10) / 10;
  }
  calculateExpectancyVenus(){
    let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / .62;
    return Math.round(earthYearsLeft * 10) / 10;
  }
  calculateExpectancyMars(){
    let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 1.88;
    return Math.round(earthYearsLeft * 10) / 10;
  }
  calculateExpectancyJupiter(){
    let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 11.86;
    return Math.round(earthYearsLeft * 10) / 10;
  }
  calculateExpectancySaturn(){
    let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 29;
    return Math.round(earthYearsLeft * 10) / 10;
  }
  calculateExpectancyUranus(){
    let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 84;
    return Math.round(earthYearsLeft * 100) / 100;
  }

}
