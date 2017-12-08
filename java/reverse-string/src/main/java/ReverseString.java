class ReverseString {
    String reverse(String toBeReversed) {
        char[] chars = toBeReversed.toCharArray();
        String returnString = "";
        for (char c : chars) {
            returnString = c + returnString;
        }
        return returnString;
    }
}