/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {

    let unit = input.match(/[a-zA-Z]+/g);
    let inputArray = input.split(unit);
    let number = inputArray[0];
 if(number.indexOf('/') > 0 ) {
    let fractionNum = number.split('/');
    if(fractionNum.length > 2) {
      return 'invalid';
    } else {
      return (parseFloat(fractionNum[0]) / parseFloat(fractionNum[1]));
    }
 } else {
      if (number === '') {
        return 1;
      } else if (isNaN(number) || number === '0') {
        return "invalid";
      } else {
        return parseFloat(number);
      }
    }
  };
  
  this.getUnit = function(input) {
    let match = input.match(/[a-zA-Z]+/g);
    if(match === null) {
      return 'invalid';
    } else {
      let unit = match[0];
      if (unit === "l" || unit ==="L") {
        return match[0].toUpperCase();
      } else {
        return match[0].toLowerCase();
      }
    }
  };

  // let unit = match[0].toLowerCase();
  //return unit

  /*
if(match === null) {
      return 'invalid';
    } else {
      let unit = match[0].toLowerCase();
      return unit;
    }




  */
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case "gal":
        return "L";
        break;
      case "L":
        return "gal";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
      default:
        return "invalid";
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case "gal":
        return "gallons";
        break;
      case "L":
        return "liters";
        break;
      case "lbs":
        return "pounds";
        break;
      case "kg":
        return "kilograms";
        break;
      case "mi":
        return "miles";
        break;
      case "km":
        return "kilometers";
        break;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch (initUnit) {
      case "gal":
        return parseFloat((initNum*galToL).toFixed(5));
        break;
      case "L":
        return parseFloat((initNum/galToL).toFixed(5));
        break;
      case "lbs":
        return parseFloat((initNum*lbsToKg).toFixed(5));
        break;
      case "kg":
        return parseFloat((initNum/lbsToKg).toFixed(5));
        break;
      case "mi":
        return parseFloat((initNum*miToKm).toFixed(5));
        break;
      case "km":
        return parseFloat((initNum/miToKm).toFixed(5));
        break;
      default:
        return 'invalid'
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    if (initNum === 'invalid' && returnUnit === 'invalid') {
      return "invalid number and unit"
    } else if (initNum === 'invalid') {
      return "invalid number";
    } else if (returnUnit === 'invalid') {
      return "invalid unit";
    } else {
      
      let result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
      
      return result;
    }
  };
  
}

module.exports = ConvertHandler;
