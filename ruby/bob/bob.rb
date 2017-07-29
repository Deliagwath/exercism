class Bob
    def self.hey(remark)
        remark.strip!
        return "Whoa, chill out!" if remark =~ /[a-zA-Z]+/ && remark == remark.upcase
        return "Sure." if remark =~ /\?\Z/
        return "Fine. Be that way!" if remark =~ /\A[\W]*\Z/
        "Whatever."
    end
end
module BookKeeping
    VERSION = 1
end