var circularBuffer = function(size) {
    this.buffer = [];
    this.size = size;
}

circularBuffer.prototype.write = function(val) {
    if (this.buffer.length == this.size) { bufferFullException(); }
}

circularBuffer.prototype.read = function() {
    if (!this.buffer.length) { bufferEmptyException(); }
}

var bufferEmptyException = function() {
    throw "Buffer is empty";
}

var bufferFullException = function() {
    throw "Buffer is full";
}

module.exports.circularBuffer = circularBuffer;
module.exports.bufferEmptyException = bufferEmptyException;
module.exports.bufferFullException = bufferFullException;