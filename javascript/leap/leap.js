//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
    this.year = input;
};

Year.prototype.isLeap = function() {
    return this.year % 400 == 0 || (this.year % 4 == 0 && !(this.year % 100 == 0));
/*
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
*/
};

module.exports = Year;
