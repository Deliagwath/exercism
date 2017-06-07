var encrypt = (input) => {
    let base = 97; // 'a'.charCodeAt(0);
    let alphabet = [];
    // Generating the alphabet
    for (let i = 0; i < 26; i++) {
        alphabet.push(String.fromCharCode(base + i));
    }
    input = input.toLowerCase();
    input = input.replace(/\W/g, '');
    let output = "";
    let count = 0;
    for (let c of input) {
        output += alphabet.indexOf(c) == -1 ? c : alphabet[25 - alphabet.indexOf(c)];
        if (++count >= 5) {
            output += " ";
            count = 0;
        }
    }
    if (output[output.length - 1] == " ") {
        output = output.substring(0, output.length - 1);
    }
    return output;
}

module.exports = {
    encode: encrypt,
}