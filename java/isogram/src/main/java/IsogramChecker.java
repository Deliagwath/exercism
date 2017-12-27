import java.util.HashSet;
import java.util.Set;
import java.text.Normalizer;
import java.text.Normalizer.Form;

class IsogramChecker {
    boolean isIsogram(String phrase) {
        phrase = Normalizer.normalize(phrase, Form.NFD)
            .replaceAll("\\p{InCombiningDiacriticalMarks}+", "")
            .replaceAll("[\\W_]", "").toLowerCase();
        Set<Character> chars = new HashSet<Character>();
        for (char c : phrase.toCharArray()) {
            chars.add(c);
        }
        return phrase.length() == chars.size();
    }
}