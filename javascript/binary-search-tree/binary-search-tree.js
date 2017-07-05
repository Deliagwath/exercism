var Root = function(value) {
    this.data = value;
}

Root.prototype.insert = function(value) {
    if (value > this.data) {
        // Not a correct BST, should be >=
        // However, the jasmine case uses > instead.
        if (this.right) { return this.right.insert(value); }
        else { this.right = new Root(value); }
    }
    else {
        if (this.left) { return this.left.insert(value); }
        else { this.left = new Root(value); }
    }
}

Root.prototype.each = function(func) {
    if (this.left) { this.left.each(func); }
    func(this.data);
    if (this.right) { this.right.each(func); }
}

module.exports = Root;