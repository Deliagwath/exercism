var Raindrops = function() {}

Raindrops.prototype.convert = function(num) {
    let returnValue = '';
    returnValue += num % 3 == 0 ? "Pling" : "";
    returnValue += num % 5 == 0 ? "Plang" : "";
    returnValue += num % 7 == 0 ? "Plong" : "";
    return returnValue == '' ? num.toString() : returnValue;
}

module.exports = Raindrops;