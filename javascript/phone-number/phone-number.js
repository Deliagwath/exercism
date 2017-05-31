var PhoneNumber = function(num) {
    this.raw = num;
}

PhoneNumber.prototype.number = function() {
    let unformatted = this.raw.replace(/\D/g, '');
    if (unformatted.length != 10) {
        if (unformatted.length > 10 && unformatted[0] == 1) {
            return unformatted.substring(1, unformatted.length);
        } else {
            return "0000000000";
        }
    }
    return unformatted;
}

PhoneNumber.prototype.areaCode = function() {
    let unformatted = this.raw.replace(/\D/g, '');
    return unformatted.substring(0, 3);
}

PhoneNumber.prototype.toString = function() {
    let main = this.number();
    return `(${this.areaCode()}) ${main.substring(3, 6)}-${main.substring(6, main.length)}`;
}

module.exports = PhoneNumber;