class Pet < ApplicationRecord
    has_many :diaries

    def age_calculation
        ((Time.zone.now.year - birth_date.year)/ 1.year.seconds).floor
    end
end
