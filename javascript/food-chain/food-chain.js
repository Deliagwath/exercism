var FoodChain = function() {}

FoodChain.prototype.verse = function(verse_num) {
    return generateVerse(verse_num);
}

FoodChain.prototype.verses = function(verse_start, verse_end) {
    let builder = "";
    for (let index = verse_start; index <= verse_end; index++) {
        builder += generateVerse(index) + "\n";
    }
    return builder;
}

var generateVerse = function(num) {
    if (num == 8) { return 'I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n'; }
    
    let animals = ["fly", "spider", "bird", "cat", "dog", "goat", "cow"];
    let swallow = [
        "",                                                 // Fly      0
        "It wriggled and jiggled and tickled inside her.\n",// Spider   1
        "How absurd to swallow a bird!\n",                  // Bird     2
        "Imagine that, to swallow a cat!\n",                // Cat      3
        "What a hog, to swallow a dog!\n",                  // Dog      4
        "Just opened her throat and swallowed a goat!\n",   // Goat     5
        "I don't know how she swallowed a cow!\n"           // Cow      6
    ];
    let starting = `I know an old lady who swallowed a ${animals[num - 1]}.\n`;

    let body = "";
    for (let cur = num - 1; cur >= 1; cur--) {
        let swallowed = cur == 2
            ? "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n"
            : `She swallowed the ${animals[cur]} to catch the ${animals[cur - 1]}.\n`;
        body += swallowed;
    }

    let ending = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    return starting + swallow[num - 1] + body + ending;
}

module.exports = FoodChain;