var Sieve = function(limit) {
    let nums = [];
    for (let i = 2; i <= limit; i++) {
        nums[i] = true;
    }

    for (let i = 2; i <= limit; i++) {
        if (nums[i]) {
            for (let j = i * 2; j <= limit; j += i) {
                nums[j] = false;
            }
        }
    }

    this.primes = [];
    nums.forEach((value, index) => {
        if (value) { this.primes.push(index); }
    });
}

module.exports = Sieve;