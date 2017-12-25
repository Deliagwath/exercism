import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Proverb {
    private String[] words;
    Proverb(String[] words) {
        this.words = words;
    }

    String recite() {
        if (this.words.length == 0) { return ""; }
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < words.length - 1; i++) {
            builder.append(
                String.format("For want of a %s the %s was lost.\n",
                    words[i],
                    words[i + 1]
                )
            );
        }
        builder.append(
            String.format("And all for the want of a %s.", words[0])
        );
        return builder.toString();
    }
}