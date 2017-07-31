class RunLengthEncoding
    def self.encode(str)
        return str if str.length == 0
        str.chars.chunk { |c| c }.map { |c, a|
            a.length == 1 ? c : a.length.to_s + c
        }.join("")
    end
    def self.decode(str)
        prevint = 0
        str.chars.chunk { |c| c.to_i > 0 }.map do |b, a|
            op = ""
            if prevint > 0
                op = a.shift * prevint
                prevint = 0
            elsif b
                prevint = a.map { |i| i }.join("").to_i
                a = []
            end
            op += a.map { |c| c }.join("")
        end.join("")
    end
end
module BookKeeping
    VERSION = 3
end