module.exports = {
    inEnglish: function(num) {
        if (num > 999999999999 || num < 0) {
            throw new Error('Number must be between 0 and 999,999,999,999.');
        } else if (num == 0) { return "zero"; }
        let segments = ["", "thousand", "million", "billion"];
        let ones = {
            0: "",
            1: "one",   2: "two",   3: "three",
            4: "four",  5: "five",  6: "six",
            7: "seven", 8: "eight", 9: "nine",
        };
        let tens = {
            1: "ten",      2: "twenty",   3: "thirty",
            4: "forty",    5: "fifty" ,   6: "sixty",
            7: "seventy",  8: "eighty",   9: "ninety",
        }
        let uniques = {
            11: "eleven",   12: "twelve",   13: "thirteen",
            14: "fourteen", 15: "fifteen",  16: "sixteen",
            17: "seventeen",18: "eighteen", 19: "nineteen",
        }
        let segmented = [];                         // Examples to keep track
        while (num) {                               // 87,654,432
            if (num % 1000 == 0) { segmented.push(["000"]); }
            else { segmented.push(num % 1000); }    // [432, 654, 87]
            num = Math.floor(num / 1000);
        }
                                                    // [[2, 3, 4], [4, 5, 6], [7, 8]]
        segmented = segmented.map(segment => segment.toString().split("").reverse());

        let english = [];
        while (segmented.length) {
            let segment = segmented.shift();        // [2, 3, 4], [4, 5, 6], [7, 8, 9]
            let pushed = false, tenned = false;
            // Thousands/Millions/Billions
            block = segments.shift();
            if (block.length) { english.unshift(block); }
            // Ones
            let uniqueCheck = uniques[segment[1] + segment[0]];
            if (parseInt(segment[0]) && !uniqueCheck) {
                if (segment[1]) {
                    english.unshift(tens[segment[1]] + "-" + ones[segment[0]]);
                    tenned = true;
                } else {
                    english.unshift(ones[segment[0]]);
                }
                pushed = true;
            }
            // Tens
            if (parseInt(segment[1]) && !tenned) {  // thirty-two
                if (uniqueCheck) { english.unshift(uniqueCheck); }
                else { english.unshift(tens[segment[1]]); }
                pushed = true;
            }
            // Hundreds
            if (parseInt(segment[2])) {             // four hundred
                english.unshift("hundred");
                english.unshift(ones[segment[2]]);
                pushed = true;
            }
            if (!pushed) { english.shift(); }
            if (english.length) { english = [english.join(" ")]; }
        }
        return english.join(" ");
    }
}