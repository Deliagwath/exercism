var Robot = function() {
    this.news = ["north", "east", "south", "west"];
    this.ins = {
        "L": "turnLeft",
        "R": "turnRight",
        "A": "advance",
    }
}

Robot.prototype.orient = function(ori) {
    let index = this.news.indexOf(ori);
    if (!(index + 1)) { throw new Error('Invalid Robot Bearing'); }
    this.ori = index;
    this.updateBearings();
}

Robot.prototype.turnRight = function() {
    this.ori = (this.ori + 1) % 4;
    this.updateBearings();
}

Robot.prototype.turnLeft = function() {
    this.ori = (this.ori + 3) % 4;
    this.updateBearings();
}

Robot.prototype.updateBearings = function() {
    this.bearing = this.news[this.ori];
}

Robot.prototype.at = function(x, y) {
    this.coordinates = [x, y];
}

Robot.prototype.advance = function() {
    switch (this.bearing) {
        case "north":
            this.coordinates[1]++;
            break;

        case "east":
            this.coordinates[0]++;
            break;

        case "south":
            this.coordinates[1]--;
            break;

        case "west":
            this.coordinates[0]--;
            break;
    }
}

Robot.prototype.instructions = function(ins) {
    return ins.split("").map(command => this.ins[command]);
}

Robot.prototype.evaluate = function(ins) {
    ins.split("").forEach(command => this[this.ins[command]]());
}

Robot.prototype.place = function(data) {
    this.coordinates = [data.x, data.y];
    this.orient(data.direction);
}

module.exports = Robot;