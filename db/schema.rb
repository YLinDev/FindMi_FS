# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_04_152026) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.float "price", null: false
    t.integer "bedrooms", null: false
    t.integer "bathrooms", null: false
    t.integer "sqft", null: false
    t.string "address", null: false
    t.string "listing_type", null: false
    t.string "year_built", null: false
    t.text "description", null: false
    t.boolean "condo", null: false
    t.string "air_cond", null: false
    t.string "parking", null: false
    t.float "monthly_hoa_fee", null: false
    t.integer "price_per_sqft", null: false
    t.string "overview", null: false
    t.integer "views", null: false
    t.integer "saves", null: false
    t.bigint "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address"], name: "index_listings_on_address", unique: true
    t.index ["owner_id"], name: "index_listings_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "listings", "users", column: "owner_id"
end
