class Trinary
    attr_reader :to_decimal
    def initialize(trinary_string)
        if trinary_string =~ /[^0-2]/
            @to_decimal = 0
        else
            @to_decimal = trinary_string
                .chars
                .map(&:to_i)
                .reverse
                .each_with_index
                .map { |tri_digit, index| tri_digit * (3 ** index) }
                .sum
        end
    end
end
module BookKeeping
    VERSION = 1
end