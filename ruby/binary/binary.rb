class Binary
    def self.to_decimal(bin_str)
        raise ArgumentError.new("Not a Binary String") if bin_str =~ /[^01]/
        bin_str.chars.reverse.each_with_index.reject { |d, i|
            d.to_i == 0
        }.map { |d, i|
            2 ** i
        }.reduce(0, :+)
    end
end
module BookKeeping
    VERSION = 3
end