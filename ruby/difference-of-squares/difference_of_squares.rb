class Squares
    def self.new(n)
        @num = n.times.map { |nm| nm + 1 }
        self
    end
    def self.difference
        self.square_of_sum - self.sum_of_squares
    end
    def self.square_of_sum
        @num.reduce(:+) ** 2
    end
    def self.sum_of_squares
        @num.map { |n| n ** 2 }.reduce(:+)
    end
end
module BookKeeping
    VERSION = 4
end