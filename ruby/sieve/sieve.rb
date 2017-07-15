class Sieve
    def self.new(num)
        @num = num
        self
    end
    def self.primes
        nums = (2..@num).to_a
        index = 0
        while index < nums.length do
            tmp = nums[index]
            p tmp
            nums.select! { |n| n % tmp != 0 }
            nums.unshift(tmp)
            index += 1
        end
        nums.reverse
    end
end
module BookKeeping
    VERSION = 1
end