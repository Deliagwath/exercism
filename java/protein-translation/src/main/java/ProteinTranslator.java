import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class ProteinTranslator {

    public List<String> translate(String rnaSequence) {
        List<String> sequence = translateHandler(rnaSequence);
        Collections.reverse(sequence);
        return sequence;
    }

    private List<String> translateHandler(String rnaSequence) {
        // Base Cases
        if (rnaSequence.length() < 3) { return new ArrayList<String>(); }
        String currentRNA = rnaSequence.substring(0, 3);
        if (
            currentRNA.equals("UAA") ||
            currentRNA.equals("UAG") ||
            currentRNA.equals("UGA")
        ) { return new ArrayList<String>(); }

        String currentProtien = "";
        switch (currentRNA) {
            case "AUG":
                currentProtien = "Methionine";
                break;
            case "UUU": case "UUC":
                currentProtien = "Phenylalanine";
                break;
            case "UUA": case "UUG":
                currentProtien = "Leucine";
                break;
            case "UCU": case "UCC": case "UCA": case "UCG":
                currentProtien = "Serine";
                break;
            case "UAU": case "UAC":
                currentProtien = "Tyrosine";
                break;
            case "UGU": case "UGC":
                currentProtien = "Cysteine";
                break;
            case "UGG":
                currentProtien = "Tryptophan";
                break;
        }

        // Recursive Call
        List<String> sequenced = translateHandler(rnaSequence.substring(3));
        sequenced.add(currentProtien);
        return sequenced;
    }
}