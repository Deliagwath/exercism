import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class DiamondPrinter {
    List<String> printToList(char a) {
        int padding = a - 'A';
        if (padding == 0) { return Arrays.asList("A"); }
        List<String> ret = new ArrayList<String>();
        int diamondSize = (padding * 2) + 1;
        char curChar = 'A';
        ret.add(String.format("%1$s%2$s%1$s", spaces(padding), curChar++));
        for (int lrPad = padding - 1; lrPad >= 0; lrPad--) {
            ret.add(
                String.format(
                    "%1$s%3$s%2$s%3$s%1$s",
                    spaces(lrPad),
                    spaces(diamondSize - (lrPad * 2) - 2),
                    curChar++));
        }
        List<String> mirrored = new ArrayList<String>(ret);
        Collections.reverse(mirrored);
        mirrored.remove(0);
        ret.addAll(mirrored);
        return ret;
    }

    private String spaces(int numSpaces) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < numSpaces; i++) {
            sb.append(" ");
        }
        return sb.toString();
    }
}