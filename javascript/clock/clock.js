var at = function(hr = 0, mn = 0) {
    return standardise(hr, mn);
}

var standardise = function(hr, mn) {
    let time = {
        "hour": hr,
        "minute": mn,
        "toString": tStr,
        "plus": pls,
        "minus": mns,
        "equals": eq
    };

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
    let hour = this.hour;
    let minute = this.minute

    let hr = hour < 10 ? `0${hour}` : hour;
    let mn = minute < 10 ? `0${minute}` : minute;

    return `${hr}:${mn}`;
}

var pls = function(min) {
    return standardise(this.hour, this.minute + min);
}

var mns = function(min) {
    return standardise(this.hour, this.minute - min);
}

var eq = function(new_time) {
    return this.toString() == new_time.toString();
}

module.exports.at = at;