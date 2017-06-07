var customFilter = (input, filterFunction, keep) => {
    let returnArray = [];
    correctedFilter = keep
        ? filterFunction
        : (input) => { return !filterFunction(input); };
    for (let i of input) {
        if (correctedFilter(i)) {
            returnArray.push(i);
        }
    }
    return returnArray;
}

module.exports = {
    keep: (input, ff) => customFilter(input, ff, true),
    discard: (input, ff) => customFilter(input, ff, false),
}