class Series
    def initialize(num_str)
        @num_str = num_str.chars
    end
    def slices(slice_len)
        raise ArgumentError.new("You dun goof'd") if slice_len > @num_str.length
        num_slices = @num_str.length - (slice_len - 1)
        num_slices.times.map { |n| @num_str[n...n + slice_len].join }
    end
end
# No Book Keeping?