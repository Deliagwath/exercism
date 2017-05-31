var BeerSong = function() {}

BeerSong.prototype.verse = function(num) {
    return single_verse(num);
}

BeerSong.prototype.sing = function(start, end) {
    if (end === undefined) { end = 0; }
    let builder = "";
    for (let i = start; i >= end; i--) {
        builder += single_verse(i) + "\n";
    }
    return builder.substring(0, builder.length - 1);
}

var single_verse = function(num) {
    if (num == 0) { return last_verse; }
    let start_num = num;
    let start_bottle = num == 1 ? "bottle" : "bottles";
    let end_num = num - 1 == 0 ? "no more" : num - 1;
    let end_bottle = num - 1 == 1 ? "bottle" : "bottles";

    let first_constant = "of beer on the wall,";
    let second_constant = "of beer.\n";

    let third_constant = "down and pass it around,";
    let fourth_constant = "of beer on the wall.\n";

    return `${num} ${start_bottle} ${first_constant} ${num} ${start_bottle} ${second_constant}Take ${end_num > 0 ? "one" : "it"} ${third_constant} ${end_num} ${end_bottle} ${fourth_constant}`;
}

var last_verse = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";

module.exports = BeerSong;