class Triangle {
    private boolean equi = false;
    private boolean isos = false;
    private boolean scal = false;
    Triangle(double side1, double side2, double side3) throws TriangleException {
        if (
            side1 == 0 ||
            side2 == 0 ||
            side3 == 0 ||
            side1 + side2 < side3 ||
            side2 + side3 < side1 ||
            side3 + side1 < side2) {
                throw new TriangleException();
            }
        
        if (side1 == side2 && side2 == side3) { this.equi = true; this.isos = true; }
        else if (side1 == side2 || side2 == side3 || side3 == side1) { this.isos = true; }
        else { this.scal = true; }
    }

    boolean isEquilateral() {
        return this.equi;
    }

    boolean isIsosceles() {
        return this.isos;
    }

    boolean isScalene() {
        return this.scal;
    }

}
