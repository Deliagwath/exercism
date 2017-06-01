var DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(input) {
    if (input.match(/[^ATGC]/)) { throw new Error('Invalid input'); }
    input = input.replace(/A/g, 'U');
    input = input.replace(/T/g, 'A');
    input = input.replace(/G/g, 'Z'); // Temporary Variable to C
    input = input.replace(/C/g, 'G');
    input = input.replace(/Z/g, 'C');
    return input;
}

module.exports = DnaTranscriber;