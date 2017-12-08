class ReverseString {
    String reverse(String toBeReversed) {
        StringBuilder sb = new StringBuilder(toBeReversed);
        return sb.reverse().toString();
    }
}