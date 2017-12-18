class RotationalCipher {
    private int shift;
    private int unshift;
    RotationalCipher(int shiftKey) {
        if (shiftKey < 0) { shiftKey += 26; }
        if (shiftKey > 26) { shiftKey -= 26; }
        this.shift = shiftKey;
        this.unshift = shiftKey - 26;
    }
    String rotate(String data) {
        StringBuilder sb = new StringBuilder();
        char c, unshifted;
        for (int i = 0; i < data.length(); i++) {
            c = data.charAt(i);
            if (!Character.isLetter(c)) {
                sb.append(c);
                continue;
            }
            unshifted = (char) (c + this.unshift);
            if ((Character.isLowerCase(c) && unshifted < 'a') || (unshifted < 'A')) {
                    sb.append((char) (c + this.shift));
            }
            else { sb.append(unshifted); }
        }
        return sb.toString();
    }
}