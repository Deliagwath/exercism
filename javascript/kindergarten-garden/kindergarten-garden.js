var Garden = function(garden, students) {
    if (students === undefined) {
        students = [
            "Alice", "Bob", "Charlie", "David",
            "Eve", "Fred", "Ginny", "Harriet",
            "Ileana", "Joseph", "Kincaid", "Larry"
        ];
    }
    students.sort();
    students = students.map(student => student.toLowerCase());
    let mapping = {
        "V": "violets",
        "R": "radishes",
        "C": "clover",
        "G": "grass",
    };

    // Garden Parsing
    let [top, bottom] = garden.split("\n");
    top     = top   .split('').map(letter => mapping[letter]);
    bottom  = bottom.split('').map(letter => mapping[letter]);

    garden = {};
    students.forEach((student, index) => {
        garden[student] = [];
        garden[student].push(top[index * 2], top[index * 2 + 1]);
        garden[student].push(bottom[index * 2], bottom[index * 2 + 1]);
    });
    return garden;
}

module.exports = Garden;