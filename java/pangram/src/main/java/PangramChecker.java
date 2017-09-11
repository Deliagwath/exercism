public class PangramChecker {
    public boolean isPangram(String input) {
    	char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
    	input = input.toLowerCase();
    	int count = 0;
    	for (char c : alphabet) {
    		if (input.indexOf(c) >= 0) count++;
    	}
    	return count == alphabet.length;
    }
}