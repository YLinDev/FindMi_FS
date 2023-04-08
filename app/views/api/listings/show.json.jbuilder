json.listing do
    json.extract! @listing, 
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

    # if @listing.photos.attached?
    #     @listing.photos.each do |photo|
    #         json.set! :photos_url, photo.url
    #     end
    # else
    #     json.photos_url "/bench_placeholder.png"
    # end 

    if @listing.photos.attached?
        json.photos_url @listing.photos.map { |photo| photo.url }
    else
        json.photos_url '././assets/stock-image.jpeg'
    end 
end
