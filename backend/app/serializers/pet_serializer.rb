class PetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :birth_date, :age

  has_many :diaries
end
