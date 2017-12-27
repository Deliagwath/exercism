import java.util.ArrayList;
import java.util.List;

class Flattener {
    public List<?> flatten(List<?> list) {
        List<Object> ret = new ArrayList<Object>();
        for (Object x : list) {
            if (x == null) { continue; }
            if (x instanceof List<?>) {
                ret.addAll(flatten((List<?>) x));
            } else {
                ret.add(x);
            }
        }
        return ret;
    }
}