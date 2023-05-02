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
            :updated_at,
            :lat,
            :lng

            if listing.photos.attached?
                json.photos_url listing.photos.map { |photo| photo.url }
            else
                json.photos_url '././assets/stock-image.jpeg'
            end 

            if listing.favorites
                json.saver_id listing.favorites.map { |saver| saver.saver_id }
            else
                json.saver_id []
            end
        end
    end
end

# saver objects 
#
# if listing.favorites
#     json.saver_id listing.favorites.map { |saver| {saver.id => saver.saver_id} }
# else
#     json.saver_id []
# end

