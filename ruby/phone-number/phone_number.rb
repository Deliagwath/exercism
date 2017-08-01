class PhoneNumber
    def self.clean(phone_str)
        # Illegal Characters
        return nil if phone_str =~ /[^0-9\-()+. ]/

        # Strip Irrelevant Characters
        phone_str.gsub!(/[^0-9]/, "")

        # Illegal Phone Length
        return nil if phone_str.length > 11 || phone_str.length <= 9
        return nil if phone_str.length == 11 && phone_str[0] != "1"

        # Trim Leading 1
        if phone_str.length == 11 then phone_str[0] = '' end

        # Illegal Area/Exchange Code
        return nil if (0..1).include?phone_str[0].to_i
        return nil if (0..1).include?phone_str[3].to_i

        phone_str
    end
end
module BookKeeping
    VERSION = 2
end