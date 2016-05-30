'use strict';

module.exports = function sumDayMonth(date){
  let newDate;
  let n = new Date(date);
  if(date[0] !== undefined){
    newDate = date.map((d) => new Date(d.setDate(d.getDate() + 7)));   
  }else{
    newDate = new Date(n.setDate(n.getDate() + 7));
  }

  return newDate; 
}
