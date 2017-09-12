class RaindropConverter {
    String convert(int number) {
    	String output = "";
    	output += number % 3 == 0 ? "Pling" : "";
    	output += number % 5 == 0 ? "Plang" : "";
    	output += number % 7 == 0 ? "Plong" : "";
    	return output.length() == 0 ? Integer.toString(number) : output;
    }
}