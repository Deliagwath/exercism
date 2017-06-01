const past_names = [""];

var Robot = function() {
    // Generates Name
    this.name = get_valid_name();
    past_names.push(this.name);
}

Robot.prototype.reset = function() {
    this.name = get_valid_name();
    past_names.push(this.name);
}

var get_valid_name = function() {
    let new_name = "";
    while (past_names.includes(new_name)) {
        new_name = generate_name();
    }
    return new_name;
}

var generate_name = function() {
    // Format /^[A-Z]{2}\d{3}$/
    let name = "";
    for (let i = 0; i < 2; i++) {
        name += random_char();
    }
    for (let i = 0; i < 3; i++) {
        name += random_num();
    }
    return name;
}

var random_char = function() {
    let char_base = 'A';
    let modifier = Math.floor(Math.random() * 26);
    return String.fromCharCode(char_base.charCodeAt(0) + modifier);
}

var random_num = function() {
    return Math.floor(Math.random() * 9);
}

module.exports = Robot;