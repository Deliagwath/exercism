require 'prime'
class PrimeFactors
    def self.for(num)
        num.prime_division.map { |factor, power| power.times.map { factor } }.flatten
    end
end