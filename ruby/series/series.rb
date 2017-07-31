class Series
    def initialize(num_str)
        @num_str = num_str.chars
    end
    def slices(slice_len)
        raise ArgumentError.new("You dun goof'd") if slice_len > @num_str.length
        @num_str.each_cons(slice_len) { |slice| slice.join }
    end
end
# No Book Keeping?