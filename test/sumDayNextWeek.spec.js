const Should = require('should');
const sumDayWeek = require('../src/sumDayNextWeek');

describe('sum of Days of Next Week', function() {
  it('must returned 13 when the day is equals 6', function() {
    sumDayWeek('05-06-2016').should.eql(new Date('05-13-2016'));
  });

  it('must returned 19 when the day is equals 12', function() {
    sumDayWeek(new Date('05-12-2016')).should.eql(new Date('05-19-2016')); 
  });

  it('must returned 8 and 12 when the day is equal 1 and 5', function() {
    sumDayWeek([new Date('05-01-2016'), new Date('05-05-2016')]).should.eql([new Date('05-08-2016'), new Date('05-12-2016')])
  });

  it('must returned 8 and 12 when the day is equal 1 and 5', function() {
    sumDayWeek([new Date('05-03-2016'), new Date('05-11-2016')]).should.eql([new Date('05-10-2016'), new Date('05-18-2016')])
  });

});
