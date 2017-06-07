var Crypto = function(input) {
    this.rawInput = input;
    this.normalised = input.toLowerCase().replace(/[\W_]/g, '');
    this.dimensions = getDimensions(this.normalised.length);
}

Crypto.prototype.normalizePlaintext = function() {
    return this.normalised;
}

Crypto.prototype.size = function() {
    return this.dimensions[1];
}

Crypto.prototype.plaintextSegments = function() {
    let blocks = [];
    for (let i = 0; i < this.dimensions[0]; i++) {
        blocks.push(
            this.normalised.substring(
                i * this.dimensions[1], 
                i * this.dimensions[1] + this.dimensions[1]
            )
        );
    }
    return blocks;
}

Crypto.prototype.ciphertext = function() {
    let blocks = this.plaintextSegments();
    let encrypted = '';
    for (let col = 0; col < this.dimensions[1]; col++) {
        for (let block of blocks) {
            encrypted += block[col] ? block[col] : "";
        }
    }
    return encrypted;
}

function getDimensions(inputLength) {
    // rows * col <= length
    // col >= row
    // col - row <= 1
    let d = [1, 1] // Rows, Cols
    let index = 1; // Start with Columns
    while (d[0] * d[1] < inputLength) {
        d[index++ % 2]++; // Alternate between adding Cols and Rows
    }
    return d;
}

module.exports = Crypto;