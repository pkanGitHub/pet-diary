class PetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :birth_date

  has_many :diaries
end
