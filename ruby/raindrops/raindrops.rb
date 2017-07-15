class Raindrops
    def self.convert(num)
        str = ""
        str += "Pling" if num % 3 == 0
        str += "Plang" if num % 5 == 0
        str += "Plong" if num % 7 == 0
        return num.to_s if str == ""
        str
    end
end
module BookKeeping
    VERSION = 3
end