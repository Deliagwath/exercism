var Pangram = function(input) {
    this.str = input.toLowerCase();
}

Pangram.prototype.isPangram = function() {
    if (this.str.length < 26) { return false; }
    let base = "a".charCodeAt(0);
    let check = {}
    for (let i = base; i < base + 26; i++) {
        check[i] = false;
    }
    for (let c of this.str) {
        let ascii = c.charCodeAt(0);
        if (check[ascii] === undefined) { continue; }
        check[ascii] = true;
    }
    return Object.values(check).every(c => c);
}

module.exports = Pangram;