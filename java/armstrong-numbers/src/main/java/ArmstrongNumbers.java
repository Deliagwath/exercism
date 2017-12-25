import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class ArmstrongNumbers {
	boolean isArmstrongNumber(int numberToCheck) {
		List<Double> digits = 
			Arrays.asList(Integer.toString(numberToCheck).split(""))
				.stream()
				.map(Double::parseDouble)
				.collect(Collectors.toList());
		int check = digits.stream()
			.map(digit -> Math.pow(digit, digits.size()))
			.mapToInt(Double::intValue)
			.sum();
		return numberToCheck == check;
	}
}