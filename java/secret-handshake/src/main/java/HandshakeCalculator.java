import java.util.ArrayList;
import java.util.Collections;

class HandshakeCalculator {

    ArrayList<Signal> calculateHandshake(int number) {
        if (number > 31) { return new ArrayList<Signal>(); }
        ArrayList<Signal> commands = new ArrayList<Signal>();
        boolean reverse = false;
        if (number - 16 >= 0) {
        	reverse = true;
        	number -= 16;
        }
        if (number - 8 >= 0) {
        	commands.add(Signal.JUMP);
        	number -= 8;
        }
        if (number - 4 >= 0) {
        	commands.add(Signal.CLOSE_YOUR_EYES);
        	number -= 4;
        }
        if (number - 2 >= 0) {
        	commands.add(Signal.DOUBLE_BLINK);
        	number -= 2;
        }
        if (number - 1 >= 0) {
        	commands.add(Signal.WINK);
        	number -= 1;
        }
        if (!reverse) {
        	Collections.reverse(commands);
        }
        return commands;
    }
}