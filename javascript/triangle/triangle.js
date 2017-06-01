var Triangle = function(a, b, c) {
    this.dimensions = [a, b, c];
}

var validify_dimensions = function(a, b, c) {
    if (!a || !b || !c) { throw new Error("Invalid Triangle"); }
    if (a + b < c || a + c < b || b + c < a) { throw new Error("Invalid Triangle"); }
}

Triangle.prototype.kind = function() {
    validify_dimensions(...(this.dimensions));
    [a, b, c] = this.dimensions;
    if (a == b && b == c) { return "equilateral"; }
    else if (a == b || b == c || a == c) { return "isosceles"; }
    else { return "scalene"; }
}

module.exports = Triangle;