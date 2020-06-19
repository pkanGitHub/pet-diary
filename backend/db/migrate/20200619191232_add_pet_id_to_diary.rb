class AddPetIdToDiary < ActiveRecord::Migration[6.0]
  def change
    add_column :diaries, :pet_id, :integer
  end
end
