module.exports = (input, func) => {
    let output = [];
    for (let i of input) {
        output.push(func(i));
    }
    return output;
}