class Game
    def initialize
        @rolls = []
    end
    def roll(num)
        if (num < 0 || num > 10 || (25 > @rolls.length && @rolls.length > 20 && @rolls[-1] != 10))
            raise BowlingError.new("Invalid Number")
        end
        @rolls.push(num)
    end
    def score
        @rolls.sum
    end
end
class BowlingError < StandardError
end
module BookKeeping
    VERSION = 3
end