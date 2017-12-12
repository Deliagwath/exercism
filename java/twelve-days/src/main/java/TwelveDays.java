class TwelveDays {
    private final String[] days = new String[]
    {
        "first",    "second",   "third",
        "fourth",   "fifth",    "sixth",
        "seventh",  "eighth",   "ninth",
        "tenth",    "eleventh", "twelfth"
    };
    private final String[] gifts = new String[]
    {
        "a Partridge in a Pear Tree.\n",
        "and a Partridge in a Pear Tree.\n",
        "two Turtle Doves, ",
        "three French Hens, ",
        "four Calling Birds, ",
        "five Gold Rings, ",
        "six Geese-a-Laying, ",
        "seven Swans-a-Swimming, ",
        "eight Maids-a-Milking, ",
        "nine Ladies Dancing, ",
        "ten Lords-a-Leaping, ",
        "eleven Pipers Piping, ",
        "twelve Drummers Drumming, "
    };
    String verse(int verseNumber) {
        StringBuilder sb = new StringBuilder();
        sb.append("On the ");
        sb.append(this.days[verseNumber - 1]);
        sb.append(" day of Christmas my true love gave to me, ");
        if (verseNumber == 1) { sb.append(this.gifts[0]); }
        else {
            for (int i = verseNumber; i > 0; i--) {
                sb.append(this.gifts[i]);
            }
        }
        return sb.toString();
    }

    String verses(int startVerse, int endVerse) {
        StringBuilder sb = new StringBuilder();
        for (int i = startVerse; i <= endVerse; i++) {
            sb.append(verse(i));
            sb.append("\n");
        }
        sb.delete(sb.length() - 1, sb.length());
        return sb.toString();
    }
    
    String sing() {
        return verses(1, 12);
    }
}