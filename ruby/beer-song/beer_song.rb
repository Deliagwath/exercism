class BeerSong
    def initialize
    end
    def verse(verse_no)
        s1(verse_no) + s2(verse_no)
    end
    def s1(verse_no)
        num_bottles = verse_no > 0 ? verse_no : "No more"
        plural = verse_no == 1 ? "" : "s"
        "#{num_bottles} bottle#{plural} of beer on the wall, " +
        "#{num_bottles.downcase} bottle#{plural} of beer.\n"
    end
    def s2(verse_no)
        p1 = verse_no > 0 ? "Take it down and pass it around" : "Go to the store and buy some more"
        num_bottles = verse_no - 1 > 0 ? verse_no : "no more"
        plural = verse_no - 1 == 1 ? "" : "s"
        "#{p1}, #{num_bottles} bottle#{plural} of beer on the wall.\n"
    end
    def verses(verse_start, verse_end)
    end
end
module BookKeeping
    VERSION = 3
end