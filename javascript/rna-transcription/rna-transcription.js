var DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(input) {
    let transcribed = '';
    for (let c of input) {
        transcribed += transcribe(c);
    }
    return transcribed;
}

var transcribe = function(letter) {
    switch (letter) {
        case 'G':
            return 'C';
        case 'C':
            return 'G';
        case 'T':
            return 'A';
        case 'A':
            return 'U';
        default:
            throw new Error('Invalid input');
    }
}

module.exports = DnaTranscriber;