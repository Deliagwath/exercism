var at = function(hr = 0, mn = 0) {
    this.standardise = std;
    this.toString = tStr;
    this.equals = eq.bind(this);
    this.plus = pls;
    this.minus = mns;
    this.time = this.standardise(hr, mn);
    return ;
}

var std = function(hr, mn) {
    let time = { "hour": hr, "minute": mn };

    // Standardising minutes
    while (time.minute > 59) {
        time.minute -= 60;
        time.hour += 1;
    }
    while (time.minute < 0) {
        time.minute += 60;
        time.hour -= 1;
    }

    // Standardising hours
    while (time.hour < 0)   { time.hour += 24; }
    while (time.hour > 23)  { time.hour -= 24; }

    return time;
}

var tStr = function() {
    let hour = this.time.hour;
    let minute = this.time.minute

    let hr = hour < 10 ? `0${hour}` : hour;
    let mn = minute < 10 ? `0${minute}` : minute;

    return `${hr}:${mn}`;
}

var pls = function(min) {
    this.time = this.standardise(this.time.hour, this.time.minute + min);
    return this;
}

var mns = function(min) {
    return pls(-min);
}

var eq = function(new_time) {
    return this.toString() == new_time.toString();
}

module.exports.at = at;