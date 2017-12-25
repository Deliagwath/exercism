import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Matrix {

    private List<List<Integer>> rows;
    private List<List<Integer>> cols;
    Matrix(List<List<Integer>> values) {
        this.rows = values;
        this.cols = transpose(values);
    }

    // Transposes and sets Columns
    private List<List<Integer>> transpose(List<List<Integer>> matrix) {
        List<List<Integer>> cols = new ArrayList<List<Integer>>();
        if (matrix.size() == 0) { return cols; }
        List<Integer> colBuilder;
        for (int col = 0; col < matrix.get(0).size(); col++) {
            colBuilder = new ArrayList<Integer>();
            for (int row = 0; row < matrix.size(); row++) {
                colBuilder.add(matrix.get(row).get(col));
            }
            cols.add(colBuilder);
        }
        return cols;
    }
    private int listMin(List<Integer> list) {
        return list.stream().min(Integer::compare).get();
    }
    private int listMax(List<Integer> list) {
        return list.stream().max(Integer::compare).get();
    }

    Set<MatrixCoordinate> getSaddlePoints() {
        Set<MatrixCoordinate> saddles = new HashSet<MatrixCoordinate>();
        List<Integer> rowMax = new ArrayList<Integer>(), colMin = new ArrayList<Integer>();
        // Collect Maximum for each Row
        // Collect Minimum for each Column
        for (int row = 0; row < this.rows.size(); row++) {
            rowMax.add(listMax(this.rows.get(row)));
        }
        for (int col = 0; col < this.cols.size(); col++) {
            colMin.add(listMin(this.cols.get(col)));
        }

        // Iterate the matrix and compare to local maxima and minima
        int atom;
        for (int row = 0; row < this.rows.size(); row++) {
            for (int col = 0; col < this.cols.size(); col++) {
                atom = this.rows.get(row).get(col);
                if (atom == rowMax.get(row) && atom == colMin.get(col)) {
                    saddles.add(new MatrixCoordinate(row, col));
                }
            }
        }

        return saddles;
    }
}