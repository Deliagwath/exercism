class Phrase
    attr_reader :word_count
    def initialize(n)
        @word_count = {}
        n.downcase.scan(/[a-zA-Z0-9]+(?:[']*[a-zA-Z0-9]+)*/).each do |w|
            @word_count[w] = 0 if @word_count[w] == nil
            @word_count[w] += 1
        end
    end
end
module BookKeeping
    VERSION = 1
end