class PrimeCalculator {
    int nth(int nth) {
        if (nth < 1) { throw new IllegalArgumentException(); }
        if (nth == 1) { return 2; }
        if (nth == 2) { return 3; }
        nth -= 2;
        int prime = 4;
        while (nth > 0) {
            prime++;
            if (isPrime(prime)) nth--;
        }
        return prime;
    }
    boolean isPrime(int number) {
        int max = (int) Math.round(Math.sqrt(number));
        for (int i = 2; i <= max; i++) {
            if (number % i == 0) return false;
        }
        return true;
    }
}