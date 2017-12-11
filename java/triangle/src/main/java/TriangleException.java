class TriangleException extends Exception {
    private final String err = "Invalid Triangle Dimensions";
    public TriangleException() {}
    public String getError() {
        return this.err;
    }
}