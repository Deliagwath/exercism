class Integer
    def to_roman
        romans = {
            'M'=>1000,  'CM'=>900,
            'D'=>500,   'CD'=>400,
            'C'=>100,   'XC'=>90,
            'L'=>50,    'XL'=>40,
            'X'=>10,    'IX'=>9,
            'V'=>5,     'IV'=>4,
            'I'=>1,
        }
        num = self
        roman = ''
        romans.keys.each do |key|
            mul = (num / romans[key]).floor
            num -= romans[key] * mul
            roman += key * mul
        end
        roman
    end
end
module BookKeeping
    VERSION = 2
end