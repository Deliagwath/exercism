var Bob = function() {}

Bob.prototype.hey = function(input) {
    if (input.match(/[A-Z]/) && input.isUpper()) { return "Whoa, chill out!"; }
    if (input.match(/\?$/)) { return "Sure."; }
    if (input.match(/^\s*$/)) { return "Fine. Be that way!"; }
    return "Whatever.";
}

String.prototype.isUpper = function() {
    return this.valueOf() === this.valueOf().toUpperCase();
}

module.exports = Bob;