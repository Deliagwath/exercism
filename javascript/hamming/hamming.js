var Hamming = function() {}

Hamming.prototype.compute = function(str1, str2) {
    if (str1.length != str2.length) { throw new Error("DNA strands must be of equal length."); }
    let dist = 0;
    for (let index = 0; index < str1.length; index++) {
        if (str1[index] != str2[index]) dist++;
    }
    return dist;
}

module.exports = Hamming;