class DiarySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :post, :posted_date, :pet_id
end
