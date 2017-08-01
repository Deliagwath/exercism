class PrimeFactors
    def self.for(num)
        factors = []
        while num > 1
            (2..num).each do |factor|
                if num % factor == 0
                    factors << factor
                    num /= factor
                    break
                end
            end
        end
        factors
    end
end