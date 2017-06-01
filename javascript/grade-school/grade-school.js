var School = function() {
    this.pop = {};
}

School.prototype.add = function(student, grade) {
    if (this.pop[grade] === undefined) {
        this.pop[grade] = [student];
    } else {
        this.pop[grade].push(student);
    }
}

School.prototype.grade = function(g) {
    return this.pop[g] === undefined ? [] : this.pop[g].sort();
}

School.prototype.roster = function() {
    let sorted = Object.keys(this.pop).map(g => [g, this.pop[g].sort()]);
    let sorted_pop = {};
    sorted.forEach(([grade, student_array]) => sorted_pop[grade] = student_array);
    return sorted_pop;
}

module.exports = School;