import java.util.List;

class DifferenceOfSquaresCalculator {
	int computeSquareOfSumTo(int num) {
		int sum = 0;
		for (int i = 1; i <= num; i++) {
			sum += i;
		}
		return (int)Math.pow((double)sum, 2.0);
	}
	int computeSumOfSquaresTo(int num) {
		double sum = 0;
		for (int i = 1; i <= num; i++) {
			sum += Math.pow((double)i, 2);
		}
		return (int)sum;
	}
	int computeDifferenceOfSquares(int num) {
		return computeSquareOfSumTo(num) - computeSumOfSquaresTo(num);
	}
}