class RnaTranscription {
    String transcribe(String dnaStrand) {
    	String invalids = dnaStrand
    			.replace("G", "")
    			.replace("C", "")
    			.replace("A", "")
    			.replace("T", "");
    	if (invalids.length() > 0) {
    		throw new IllegalArgumentException("Invalid input");
    	}
        return dnaStrand
        		.replace('G', 'N')
        		.replace('C', 'G')
        		.replace('N', 'C')
        		.replace('A', 'U')
        		.replace('T', 'A');
    }
}