json.user do
    json.extract! @user, 
        :id, 
        :email
        json.favorites do 
            @user.favorites.each do |favorite|
                json.set! favorite.listing_id do 
                    json.extract! favorite,
                    :id
                end
            end
        end
             
end
