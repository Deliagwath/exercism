class Complement
    def self.of_dna(str)
        return "" if str[/[^GCAT]/] != nil
        str.gsub!(/A/, "U")
        str.gsub!(/T/, "A")
        str.gsub!(/G/, "S")
        str.gsub!(/C/, "G")
        str.gsub!(/S/, "C")
        str
    end
end
module BookKeeping
    VERSION = 4
end