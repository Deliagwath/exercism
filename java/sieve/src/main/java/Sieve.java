import java.util.ArrayList;
import java.util.List;

class Sieve {
    private List<Integer> primes;
    Sieve(int maxPrime) {
        boolean[] sieve = new boolean[maxPrime + 1];
        for (int i = 0; i <= maxPrime; i++) { sieve[i] = true; }
        this.primes = new ArrayList<Integer>();
        int maxSqrt = (int) Math.floor(Math.sqrt(maxPrime));
        for (int i = 2; i <= maxSqrt; i++) {
            if (sieve[i]) {
                for (int j = i * 2; j <= maxPrime; j += i) {
                    sieve[j] = false;
                }
            }
        }
        for (int i = 2; i <= maxPrime; i++) {
            if (sieve[i]) { this.primes.add(i); }
        }
    }

    List<Integer> getPrimes() {
        return this.primes;
    }
}
