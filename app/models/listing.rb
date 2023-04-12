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
#  lat             :float
#  lng             :float
#
class Listing < ApplicationRecord
    validates :price, :bedrooms, :bathrooms, :sqft, :listing_type, 
        :year_built, :description, :air_cond, :parking, :monthly_hoa_fee,
        :price_per_sqft, :overview, :views, :saves, :owner_id, presence: true 
    validates :condo, inclusion: [true, false]
    validates :address, uniqueness: true, presence: true

    geocoded_by :address_for_map, latitude: :lat, longitude: :lng

    after_validation :geocode

    belongs_to :user, 
        foreign_key: :owner_id,
        inverse_of: :listings

    has_many :favorites,
        foreign_key: :listing_id,
        inverse_of: :listing,
        dependent: :destroy

    has_many_attached :photos

    def address_for_map
        if address.include? "APT" 
            start_index = address.index("APT")
            end_index = address.index(",")
            return address[0...start_index] + address[end_index..-1]
        end
        if address.include? "#"
            start_index = address.index("#")
            end_index = address.index(",")
            return address[0...start_index] + address[end_index..-1]
        end
        if address.include? "UNIT"
            start_index = address.index("#")
            end_index = address.index(",")
            return address[0...start_index] + address[end_index..-1]
        end
        address
    end

end
