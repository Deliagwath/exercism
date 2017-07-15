class Prime
    def self.nth(num)
        raise ArgumentError.new("lul 0th prime") if num == 0
        primes = [2]
        count = 3
        while primes.length < num do
            unless primes.any? { |prime| count % prime == 0 } then
                primes.push(count)
            end
            count += 1
        end
        primes.pop
    end
end
module BookKeeping
    VERSION = 1
end