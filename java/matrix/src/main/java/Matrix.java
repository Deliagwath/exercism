class Matrix {
    private int[][] rows;
    private int rowCount;
    private int[][] columns;
    private int colCount;
    Matrix(String matrixAsString) {
        String[] rows = matrixAsString.split("\\n");
        this.rowCount = rows.length;
        this.colCount = rows[0].split(" ").length;

        this.rows = new int[this.rowCount][this.colCount];
        this.columns = new int[this.colCount][this.rowCount];

        for (int row = 0; row < rows.length; row++) {
            String[] rowAtoms = rows[row].split(" ");
            for (int col = 0; col < rowAtoms.length; col++) {
                int atom = Integer.parseInt(rowAtoms[col]);
                this.rows[row][col] = atom;
                this.columns[col][row] = atom;
            }
        }
    }

    int[] getRow(int rowNumber) {
        return this.rows[rowNumber];
    }

    int[] getColumn(int columnNumber) {
        return this.columns[columnNumber];
    }

    int getRowsCount() {
        return this.rowCount;
    }

    int getColumnsCount() {
        return this.colCount;
    }
}
