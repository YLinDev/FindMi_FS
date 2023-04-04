# == Schema Information
#
# Table name: listings
#
#  id              :bigint           not null, primary key
#  price           :float            not null
#  bedrooms        :integer          not null
#  bathrooms       :integer          not null
#  sqft            :integer          not null
#  address         :string           not null
#  listing_type    :string           not null
#  year_built      :string           not null
#  description     :text             not null
#  condo           :boolean          not null
#  air_cond        :string           not null
#  parking         :string           not null
#  monthly_hoa_fee :float            not null
#  price_per_sqft  :integer          not null
#  overview        :string           not null
#  views           :integer          not null
#  saves           :integer          not null
#  owner_id        :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Listing < ApplicationRecord
    validates :price, :bedrooms, :bathrooms, :sqft, :listing_type, 
        :year_built, :description, :air_cond, :parking, :monthly_hoa_fee,
        :price_per_sqft, :overview, :views, :saves, :owner_id, presence: true 
    validates :condo, inclusion: [true, false]
    validates :address, uniqueness: true

    belongs_to :user, 
        foreign_key: :owner_id,
        inverse_of: :listings
end
