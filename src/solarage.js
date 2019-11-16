// export class PlanetExpectancy {
//   constructor(lifeExpectancy, earthAge) {
//     this.lifeExpectancy = lifeExpectancy;
//     this.earthAge = earthAge;
//   }
//   AllLifeExpectancyMercury(){
//     if (this.lifeExpectancy < this.earthAge) {
//       let yearsPastExpcectancyMercury = (this.earthAge - this.lifeExpectancy) / .24;
//       return "You have lived " + Math.round(yearsPastExpcectancyMercury * 10) / 10 + " Mercury years past your life expectancy. Good luck!";
//     } else {
//       let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / .24;
//       return "You have " + Math.round(earthYearsLeft * 10) / 10 + " Mercury years left to live. Have fun!";
//     }
//   }



export class PlanetAgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
  MercuryAge(){
    let preRound = this.earthAge / .24;
    return Math.round(preRound * 10) / 10;
  }
  VenusAge(){
    let preRound = this.earthAge / .62;
    return Math.round(preRound * 10) / 10;
  }
  MarsAge(){
    let preRound = this.earthAge / 1.88 ;
    return Math.round(preRound * 10) / 10;
  }
  JupiterAge(){
    let preRound = this.earthAge / 11.86 ;
    return Math.round(preRound * 10) / 10;
  }
  SaturnAge(){
    let preRound = this.earthAge / 29 ;
    return Math.round(preRound * 10) / 10;
  } UranusAge(){
    let preRound = this.earthAge / 84 ;
    return Math.round(preRound * 100) / 100;
  }
  NeptuneAge(){
    let preRound = this.earthAge / 165 ;
    return Math.round(preRound * 100) / 100;
  }
}

export class PlanetExpectancy {
  constructor(lifeExpectancy, earthAge) {
    this.lifeExpectancy = lifeExpectancy;
    this.earthAge = earthAge;
  }
  AllLifeExpectancyMercury(){
    if (this.lifeExpectancy < this.earthAge) {
      let yearsPastExpcectancyMercury = (this.earthAge - this.lifeExpectancy) / .24;
      return "You have lived " + Math.round(yearsPastExpcectancyMercury * 10) / 10 + " Mercury years past your life expectancy. Good luck!";
    } else {
      let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / .24;
      return "You have " + Math.round(earthYearsLeft * 10) / 10 + " Mercury years left to live. Have fun!";
    }
  }
  AllLifeExpectancyVenus(){
    if (this.lifeExpectancy < this.earthAge) {
      let yearsPastExpcectancyVenus = (this.earthAge - this.lifeExpectancy) / .62;
      return "You have lived " + Math.round(yearsPastExpcectancyVenus * 10) / 10 + " Venus years past your life expectancy. Good luck!";
    } else {
      let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / .62;
      return "You have " + Math.round(earthYearsLeft * 10) / 10 + " Venus years left to live. Have fun!";
    }
  }
  AllLifeExpectancyMars(){
    if (this.lifeExpectancy < this.earthAge) {
      let yearsPastExpcectancyMars = (this.earthAge - this.lifeExpectancy) / 1.88;
      return "You have lived " + Math.round(yearsPastExpcectancyMars * 10) / 10 + " Mars years past your life expectancy. Good luck!";
    } else {
      let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 1.88;
      return "You have " + Math.round(earthYearsLeft * 10) / 10 + " Mars years left to live. Have fun!";
    }
  }
  AllLifeExpectancyJupiter(){
    if (this.lifeExpectancy < this.earthAge) {
      let yearsPastExpcectancyJupiter = (this.earthAge - this.lifeExpectancy) / 11.86;
      return "You have lived " + Math.round(yearsPastExpcectancyJupiter * 10) / 10 + " Jupiter years past your life expectancy. Good luck!";
    } else {
      let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 11.86;
      return "You have " + Math.round(earthYearsLeft * 10) / 10 + " Jupiter years left to live. Have fun!";
    }
  }
  AllLifeExpectancySaturn(){
    if (this.lifeExpectancy < this.earthAge) {
      let yearsPastExpcectancySaturn = (this.earthAge - this.lifeExpectancy) / 29;
      return "You have lived " + Math.round(yearsPastExpcectancySaturn * 10) / 10 + " Saturn years past your life expectancy. Good luck!";
    } else {
      let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 29;
      return "You have " + Math.round(earthYearsLeft * 10) / 10 + " Saturn years left to live. Have fun!";
    }
  }
  AllLifeExpectancyUranus(){
    if (this.lifeExpectancy < this.earthAge) {
      let yearsPastExpcectancyUranus = (this.earthAge - this.lifeExpectancy) / 84;
      return "You have lived " + Math.round(yearsPastExpcectancyUranus * 100) / 100 + " Uranus years past your life expectancy. Good luck!";
    } else {
      let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 84;
      return "You have " + Math.round(earthYearsLeft * 100) / 100 + " Uranus years left to live. Have fun!";
    }
  }
  AllLifeExpectancyNeptune(){
    if (this.lifeExpectancy < this.earthAge) {
      let yearsPastExpcectancyNeptune = (this.earthAge - this.lifeExpectancy) / 165;
      return "You have lived " + Math.round(yearsPastExpcectancyNeptune * 100) / 100 + " Neptune years past your life expectancy. Good luck!";
    } else {
      let earthYearsLeft = (this.lifeExpectancy - this.earthAge) / 165;
      return "You have " + Math.round(earthYearsLeft * 100) / 100 + " Neptune years left to live. Have fun!";
    }
  }
}
