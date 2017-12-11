class LargestSeriesProductCalculator {
    private int[] nums;
    LargestSeriesProductCalculator(String inputNumber) {
        if (inputNumber == null) { throw new IllegalArgumentException("String to search must be non-null."); }
        if (inputNumber.replaceAll("[^0-9]", "").length() != inputNumber.length()) { throw new IllegalArgumentException("String to search may only contain digits."); }
        this.nums = new int[inputNumber.length()];
        if (this.nums.length == 0) { return; }
        String[] splitted = inputNumber.split("");
        for (int i = 0; i < splitted.length; i++) {
            this.nums[i] = Integer.parseInt(splitted[i]);
        }
    }

    long calculateLargestProductForSeriesLength(int numberOfDigits) {
        if (numberOfDigits < 0) { throw new IllegalArgumentException("Series length must be non-negative."); }
        if (numberOfDigits > this.nums.length) { throw new IllegalArgumentException("Series length must be less than or equal to the length of the string to search."); }
        long max = 0;
        long total;
        for (int start = 0; start <= this.nums.length - numberOfDigits; start++) {
            total = 1;
            for (int i = 0; i < numberOfDigits; i++) {
                total *= this.nums[start + i];
            }
            if (total > max) { max = total; }
        }
        return max;
    }
}
