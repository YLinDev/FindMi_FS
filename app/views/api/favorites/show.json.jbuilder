json.set! @favorite.listing_id do 
    json.extract! @favorite,
        :id,
        :saver_id,
        :listing_id
end