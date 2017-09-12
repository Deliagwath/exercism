import java.util.Arrays;

class Acronym {
	private String[] words;
    Acronym(String phrase) {
        this.words = phrase.split("[\\W_]+");
    }
    String get() {
        return Arrays.stream(this.words).reduce("", (acc, nextWord) -> acc += nextWord.toUpperCase().charAt(0));
    }
}