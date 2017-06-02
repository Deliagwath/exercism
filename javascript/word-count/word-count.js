var Words = function() {}

Words.prototype.count = function(str) {
    // Sanitisation
    str = str.toLowerCase();
    str = str.replace(/\s+/g, ' ');

    let regex = /([a-zA-Z0-9\u00C0-\u1FFF\u2C00-\uD7FF]+(?:'*[a-zA-Z0-9\u00C0-\u1FFF\u2C00-\uD7FF]+)*)/g;
    let words = str.match(regex);
    let counts = {};
    words.forEach(word => {
        counts[word] = typeof counts[word] === 'function' ? undefined : counts[word];
        counts[word] = counts[word] ? counts[word] + 1 : 1;
    });
    console.log(counts);
    return counts;
}

module.exports = Words;