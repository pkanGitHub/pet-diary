class DiarySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :post, :created_at, :pet_id
end
