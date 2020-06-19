class Pet < ApplicationRecord
    has_many :diaries

    def age_calculation
        ((Time.zone.now.year - birth_date.year)/ 1.year.seconds).floor
    end

    # for use of converting date from yyyy/dd/mm to mm/dd/yyyy
    # def my_date=(val)
    #     Date.strptime(val, "%m/%d/%Y") if val.present?
    # end

    def filter_by_name(name)
        Pet.where(name: name)
    end
end
