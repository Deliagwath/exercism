var Anagram = function(input) {
    this.input = input;
    this.input_count = counts(input.toLowerCase());
}

Anagram.prototype.matches = function(...candidates) {
    if (candidates.length == 1 && candidates[0].constructor == Array) {
        // Unwrap the burrito
        candidates = candidates[0];
    }
    candidates = candidates.filter(w => w.toLowerCase() != this.input)
    let parsed = candidates.map(word => [word, counts(word.toLowerCase())]);
    let anagrams = [];
    parsed.forEach(([word, count]) => {
        if (count_equals(this.input_count, count)) { anagrams.push(word); }
    });
    return anagrams;
}

var counts = function(word) {
    let count = {};
    for (let c of word) {
        if (!count[c]) { count[c] = 1; }
        else { count[c]++; }
    }
    return count;
}

var count_equals = function(input_count, new_count) {
    if (Object.keys(input_count).length != Object.keys(new_count).length) { return false; }
    return Object.keys(input_count).every(c => input_count[c] == new_count[c]);
}

module.exports = Anagram;