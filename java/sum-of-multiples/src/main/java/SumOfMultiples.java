import java.util.ArrayList;
import java.util.List;

class SumOfMultiples {
    private int[] set;
    private int max;
    SumOfMultiples(int number, int[] set) {
        this.max = number;
        this.set = set;
    }

    int getSum() {
        List<Integer> multiples = new ArrayList<Integer>();
        for (int m : this.set) {
            int i = 1;
            int curr;
            while ((curr = m * i++) < this.max) {
                multiples.add(curr);
            }
        }
        return multiples.stream().distinct().reduce(0, (acc, n) -> acc + n);
    }
}