class Hamming
    def self.compute(input1, input2)
        unless input1.length == input2.length
            raise ArgumentError.new("You dun goof'd")
        end
        count = 0
        input1.split("").zip(input2.split("")).each do |s1, s2|
            unless s1 == s2
                count += 1
            end
        end
        count
    end
end

module BookKeeping
    VERSION = 3
end