class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.float :price, null: false
      t.integer :bedrooms, null: false
      t.integer :bathrooms, null: false
      t.integer :sqft, null: false
      t.string :address, null: false
      t.string :listing_type, null: false 
      t.string :year_built, null: false
      t.text :description, null: false 
      t.boolean :condo, null: false
      t.string :air_cond, null: false
      t.string :parking, null: false
      t.float :monthly_hoa_fee, null: false
      t.integer :price_per_sqft, null: false
      t.string :overview, null: false
      t.integer :views, null: false
      t.integer :saves, null: false
      t.references :owner, null: false, foreign_key: { to_table: :users}

      t.timestamps
    end
    add_index :listings, :address, unique: true
  end
end
