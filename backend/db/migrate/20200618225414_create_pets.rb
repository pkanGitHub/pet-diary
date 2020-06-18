class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.date :birth_date
      t.integer :age

      t.timestamps
    end
  end
end
