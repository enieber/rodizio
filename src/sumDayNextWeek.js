'use strict';
const Immutable = require('immutable');

module.exports = function sumDayMonth(date){

  if(typeof date == "object"){
    return date.map((d) => changingDate(dateValue(d)));
  }else{
    return changingDate(dateValue(date));
  }
}

function dateValue(value){
  return new Date(value);
}

function getNextDay(value){
  return dateValue(value.getDate() + 7);
}

function changingDate(date){
  return dateValue(date.setDate(getNextDay(date)));
}
