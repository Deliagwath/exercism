class IsbnVerifier {

    boolean isValid(String stringToVerify) {
        stringToVerify = stringToVerify.replaceAll("[^0-9X]", "");
        if (
            stringToVerify.length() != 10 ||
            stringToVerify.substring(0, 9).contains("X")
        ) { return false; }

        String checkdigit = String.valueOf(stringToVerify.charAt(9));
        int checkdigitvalue = checkdigit.equals("X") ? 10 : Integer.parseInt(checkdigit);
        int sum = 0;
        for (int i = 0; i < 9; i++) {
            sum += Integer.parseInt(stringToVerify.substring(i, i + 1)) * (10 - i);
        }
        sum += checkdigitvalue;
        return sum % 11 == 0;
    }
}