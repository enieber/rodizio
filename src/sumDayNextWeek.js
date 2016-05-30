'use strict';
const Immutable = require('immutable');

module.exports = function sumDayMonth(date){
  let newDate;
  let n = new Date(date);
  if(date[0] !== undefined){   
   console.log(date); 
    newDate = date.map((d) => new Date(d.setDate(d.getDate() + 7)));   
  }else{
    newDate = new Date(n.setDate(n.getDate() + 7));
  }
  
  return newDate;  
}

function dateValue(value){
  return new Date(value);
}

function getNextDay(value){
  return dateValu(value.getDate() + 7);
}

function changingDate(date){
  return dateValue(date.setDate(getNextDay(date)));
}
