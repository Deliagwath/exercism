public class Hamming {
	private String left;
	private String right;
    Hamming(String leftStrand, String rightStrand) {
        if (leftStrand.length() != rightStrand.length()) throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        this.left = leftStrand;
        this.right = rightStrand;
    }

    int getHammingDistance() {
        int distance = 0;
        for (int i = 0; i < this.left.length(); i++) {
        	if (this.left.charAt(i) != this.right.charAt(i)) distance++;
        }
        return distance;
    }
}