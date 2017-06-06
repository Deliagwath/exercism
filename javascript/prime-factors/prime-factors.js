module.exports = {
    for: (num) => {
        let factors = [];
        for (let i = 2; i <= num; i++) {
            if (num == 1) { break; }
            if (num % i == 0) {
                factors.push(i);
                num /= i;
                i = 1;
            }
        }
        return factors;
    }
}