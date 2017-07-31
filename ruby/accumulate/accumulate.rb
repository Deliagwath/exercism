class Array
    def accumulate(&block)
        out = []
        self.each { |e| out << block.call(e) }
        out
    end
end
module BookKeeping
    VERSION = 1
end