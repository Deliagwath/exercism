class Array
    def keep(&block)
        output = []
        self.each do |e|
            if block.call(e) then output << e end
        end
        output
    end
    def discard(&block)
        output = []
        self.each do |e|
            unless block.call(e) then output << e end
        end
        output
    end
end