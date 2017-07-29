class Grains
    def self.square(num)
        raise ArgumentError, "Num <= 0" if num <= 0 || num > 64
        return 1 if num == 1
        2 ** (num - 1)
    end
    def self.total
        (1..64).to_a.map { |n| square(n) }.reduce(:+)
    end
end
module BookKeeping
    VERSION = 1
end