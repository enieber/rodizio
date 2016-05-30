'use strict';
const sumDayNextWeek = require('./sumDayNextWeek');
let week = [];

const daysInMonthsWeek = function (year){
  let ndate = new Date(sumDayNextWeek(year)); 
  if(ndate.getFullYear() === 2017) return week;
  week.push(ndate);
  daysInMonthsWeek(ndate, week);
}

module.exports = daysInMonthsWeek; 
