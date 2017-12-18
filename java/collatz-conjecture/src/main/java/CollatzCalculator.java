class CollatzCalculator {
    int computeStepCount(int start) {
        if (start < 1) { throw new IllegalArgumentException("Only natural numbers are allowed"); }
        if (start == 1) { return 0; }
        return computeStepCount(start % 2 == 0 ? start / 2 : (start * 3) + 1) + 1;
    }
}