/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      console.log(req.query.input)
      let input = req.query.input;

      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
//--------border -------------/
  let responseObject = {}
    if (initNum === 'invalid' && returnUnit === 'invalid') {
      responseObject['string'] = "invalid number and unit";
      res.json(responseObject.string);
    } else if (initNum === 'invalid') {
      responseObject['string'] = "invalid number";
      res.json(responseObject.string);
    } else if (returnUnit === 'invalid') {
      responseObject['string'] = "invalid unit";
      res.json(responseObject.string);
    } else {
      //res.json
      responseObject['initNum'] = initNum
      responseObject['initUnit'] = initUnit
      responseObject['returnNum'] = returnNum
      responseObject['returnUnit'] = returnUnit
      responseObject['string'] = toString
      
      res.json(responseObject)
      console.log(res.body)
    }
    
    //-------- border --------//


    });
    
};



/*

 if (initNum === 'invalid' && returnUnit === 'invalid') {
      res.send("invalid number and unit")
    } else if (initNum === 'invalid') {
      res.send("invalid number")
    } else if (returnUnit === 'invalid') {
      res.json("invalid unit");
      console.log(res);
    } else {
      //res.json
      let responseObject = {}
      responseObject['initNum'] = initNum
      responseObject['initUnit'] = initUnit
      responseObject['returnNum'] = returnNum
      responseObject['returnUnit'] = returnUnit
      responseObject['string'] = toString
      
      res.json(responseObject)
    }



*/