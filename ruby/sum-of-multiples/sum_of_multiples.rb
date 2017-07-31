class SumOfMultiples
    def initialize(*multiples)
        @multiples = multiples
    end
    def to(limit)
        (1...limit).select { |n|
            @multiples.any? { |m| n % m == 0 }
        }.sum
    end
end
module BookKeeping
    VERSION = 1
end