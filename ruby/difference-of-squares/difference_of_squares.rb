class Squares
    def initialize(n)
        @num = (1..n).to_a
    end
    def difference
        square_of_sum - sum_of_squares
    end
    def square_of_sum
        @num.sum ** 2
    end
    def sum_of_squares
        @num.map { |n| n ** 2 }.sum
    end
end
module BookKeeping
    VERSION = 4
end