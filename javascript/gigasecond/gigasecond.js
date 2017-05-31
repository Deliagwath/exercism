var Gigasecond = function(input_date) {
    this.dt = input_date;
}

Gigasecond.prototype.date = function() {
    let lived_for = this.dt.getTime();
    return new Date(lived_for + 1000000000000);
}

module.exports = Gigasecond;