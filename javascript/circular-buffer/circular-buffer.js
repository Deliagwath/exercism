var handler = function(size) {
    return new circularBuffer(size);
}

var circularBuffer = function(size) {
    this.buffer = [];
    this.size = size;
}

circularBuffer.prototype.write = function(val) {
    if (this.buffer.length == this.size) { bufferFullException(); }
    if (val === undefined || val == null) { return; }
    this.buffer.push(val);
}

circularBuffer.prototype.forceWrite = function(val) {
    if (this.buffer.length == this.size) { this.buffer.shift(); }
    this.buffer.push(val);
}

circularBuffer.prototype.read = function() {
    if (!this.buffer.length) { bufferEmptyException(); }
    return this.buffer.shift();
}

circularBuffer.prototype.clear = function() {
    this.buffer = [];
}

var bufferEmptyException = function() {
    return new Error("BufferEmptyException");
}

var bufferFullException = function() {
    return new Error("BufferFullException");
}

module.exports = {
    circularBuffer: handler,
    bufferEmptyException: bufferEmptyException,
    bufferFullException: bufferEmptyException,
}