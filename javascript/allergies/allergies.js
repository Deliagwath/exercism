var Allergies = function(num) {
    this.allergies = findAllergies(num);
}

Allergies.prototype.list = function() {
    return this.allergies;
}

Allergies.prototype.allergicTo = function(allergen) {
    return this.allergies.includes(allergen);
}

var findAllergies = function(num) {
    let allergies = {
        1: "eggs",
        2: "peanuts",
        4: "shellfish",
        8: "strawberries",
        16: "tomatoes",
        32: "chocolate",
        64: "pollen",
        128: "cats",
    }

    // Remove non-allergen score parts
    while (num > 255) { num -= 256; }

    // Finding Allergens
    let index = 128;
    let allergicTo = [];
    while (num > 0) {
        if (num == 1) {
            allergicTo.push(allergies[num]);
            num--;
        } else if (num >= index) {
            allergicTo.push(allergies[index]);
            num -= index;
        }
        index /= 2;
    }
    return allergicTo.reverse();
}

module.exports = Allergies;