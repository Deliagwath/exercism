var Matrix = function(matString) {
    this.rows = matString.split('\n').map(rowStr => rowStr.split(' ').map(Number));
    this.columns = [];
    let index = 0;
    this.rows.forEach(row => {
        row.forEach((r, c) => {
            if (!this.columns[c]) { this.columns[c] = []; }
            this.columns[c].push(r);
        });
    });
    this.findSaddles();
}

Matrix.prototype.findSaddles = function() {
    this.saddlePoints = [];
    let rowMax = this.rows.map(row => Math.max(...row));
    let colMin = this.columns.map(col => Math.min(...col));

    let maxIndex = [];
    for (let rowIndex in this.rows) {
       maxIndex[rowIndex] = this.rows[rowIndex]
           .map((val, index) => rowMax[rowIndex] == val ? index : '')
           .filter(String);
    }

    let minIndex = [];
    for (let colIndex in this.columns) {
       minIndex[colIndex] = this.columns[colIndex]
           .map((val, index) => colMin[colIndex] == val ? index : '')
           .filter(String);
    }

    for (let rowIndex in maxIndex) {
        maxIndex[rowIndex].forEach(mi => {
            if (minIndex[mi].includes(Number(rowIndex))) {
                this.saddlePoints.push([Number(rowIndex), mi]);
            }
        })
    }
}

module.exports = Matrix;