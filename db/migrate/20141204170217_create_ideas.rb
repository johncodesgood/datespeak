class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title, default: ""
      t.string :place, default: ""
      t.string :address, default: ""
      t.string :area, default: ""
      t.string :price, default: ""
      t.string :place_link, default: ""
      t.string :date_number, default: ""
      t.string :time_of_year, default: ""
      t.string :weekend_weekday, default: ""
      t.string :indoor_outdoor, default: ""
      t.boolean :drinks, default: false
      t.string :date_type, default: ""
      t.boolean :hipster, default: false
      t.boolean :romantic, default: false
      t.boolean :speakeasy, default: false
      t.string :description_link, default: ""
      t.text :description, default: ""

      t.timestamps
    end
  end
end
