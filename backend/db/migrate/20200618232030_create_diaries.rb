class CreateDiaries < ActiveRecord::Migration[6.0]
  def change
    create_table :diaries do |t|
      t.string :title
      t.string :post
      t.date :posted_date

      t.timestamps
    end
  end
end
