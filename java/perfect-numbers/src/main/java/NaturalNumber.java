import java.util.ArrayList;

class NaturalNumber {
    private int Number;
    private Classification cls;
    public NaturalNumber(int num) {
        if (num < 1) throw new IllegalArgumentException("You must supply a natural number (positive integer)");
        this.Number = num;
        computeClassification();
    }

    private void computeClassification() {
        int num = 1;
        ArrayList<Integer> factors = new ArrayList<Integer>();
        while (num <= this.Number / 2) {
            if (this.Number % num == 0) factors.add(num);
            num++;
        }
        num = factors.stream().reduce(0, (acc, f) -> acc + f);
        if (num == 1) {
            // Primes
            this.cls = Classification.DEFICIENT;
        }

        // Normal Classifications
        else if (num < this.Number) {
            this.cls = Classification.DEFICIENT;
        } else if (num == this.Number) {
            this.cls = Classification.PERFECT;
        } else if (num > this.Number) {
            this.cls = Classification.ABUNDANT;
        }
    }

    public Classification getClassification() {
        return this.cls;
    }
}