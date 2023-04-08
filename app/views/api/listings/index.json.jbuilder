json.listings({})

json.listings do 
    @listings.each do |listing|
        json.set! listing.id do
            json.extract! listing,
            :id, 
            :price, 
            :bedrooms, 
            :bathrooms, 
            :sqft, 
            :address, 
            :listing_type, 
            :year_built, 
            :description, 
            :condo, 
            :air_cond, 
            :parking,
            :monthly_hoa_fee,
            :price_per_sqft,
            :overview, 
            :views,
            :saves,
            :owner_id,
            :created_at,
            :updated_at

            if listing.photos.attached?
                json.photos_url listing.photos.map { |photo| photo.url }
            else
                json.photos_url '././assets/stock-image.jpeg'
            end 
        end
    end
end

# json.listings({})

# json.listings do 
#     json.array! @listings do |listing|
#         json.partial! 'api/listings/listing', listing: listing
#      end
# end