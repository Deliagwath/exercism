class Scrabble {
/*
 * 	A, E, I, O, U, L, N, R, S, T       1
	D, G                               2
	B, C, M, P                         3
	F, H, V, W, Y                      4
	K                                  5
	J, X                               8
	Q, Z                               10
 */
	private String letters;
    Scrabble(String word) {
        word = word.toUpperCase();
        this.letters = word;
    }

    int getScore() {
        int score = 0;
    	for (char c : this.letters.toCharArray()) {
        	if ("AEIOULNRST".indexOf(c) >= 0) { score++; }
        	else if ("DG".indexOf(c) >= 0) { score += 2; }
        	else if ("BCMP".indexOf(c) >= 0) { score += 3; }
        	else if ("FHVWY".indexOf(c) >= 0) { score += 4; }
        	else if ("K".indexOf(c) >= 0) { score += 5; }
        	else if ("JX".indexOf(c) >= 0) { score += 8; }
        	else if ("QZ".indexOf(c) >= 0) { score += 10; }
        }
    	return score;
    }
}