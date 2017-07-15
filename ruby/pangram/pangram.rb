class Pangram
    def self.pangram?(input)
        input.downcase!
        ("a".."z").to_a.select { |c| input.include?(c) }.length == 26
    end
end
module BookKeeping
    VERSION = 4
end