var toRoman = function(num) {
    let romans = {
        'M': 1000,  'CM': 900,
        'D': 500,   'CD': 400,
        'C': 100,   'XC': 90,
        'L': 50,    'XL': 40,
        'X': 10,    'IX': 9,
        'V': 5,     'IV': 4,
        'I': 1,
    }
    let roman = '';

    // Translating to Roman
    while (Object.keys(romans).length) {
        let key = Object.keys(romans)[0];
        while (num >= romans[key]) {
            num -= romans[key];
            roman += key;
        }
        delete romans[key];
    }
    return roman;
}

module.exports = toRoman;