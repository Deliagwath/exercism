import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class LuhnValidator {
    boolean isValid(String candidate) {
        String cleaned = candidate.replaceAll("[^0-9 ]", "");
        // Hack since /[^0-9 ]/ apparently doesn't match punctuation
        if (candidate.length() > cleaned.length()) { return false; }
        cleaned = cleaned.replaceAll(" ", "");
        if (cleaned.length() < 2) { return false; }
        List<Integer> nums = Arrays.asList(cleaned.split("")).stream().map(Integer::parseInt).collect(Collectors.toList());
        int doubled;
        for (int i = nums.size() - 2; i >= 0; i -= 2) {
            doubled = nums.get(i) * 2;
            nums.set(i, doubled > 9 ? doubled - 9 : doubled);
        }
        return nums.stream().mapToInt(Integer::intValue).sum() % 10 == 0;
    }
}