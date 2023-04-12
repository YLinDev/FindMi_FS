class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :saver, foreign_key: { to_table: :users }
      t.references :listing, foreign_key: { to_table: :listings }

      t.timestamps
    end
  end
end
