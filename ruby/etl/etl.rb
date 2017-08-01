class ETL
    def self.transform(db)
        newdb = Hash.new([])
        db.each do |value, keys|
            keys.each { |key| newdb[key.downcase] = value }
        end
        newdb
    end
end
module BookKeeping
    VERSION = 1
end