# json.user do
#     json.set! @current_user.id do
#         @favorites.each do |favorite|
#             json.set! favorite.id do
#                 json.extract! favorite,
#                 :id, 
#                 :saver_id,
#                 :listing_id
#             end
#         end
#     end
# end 

# json.array! @favorites do |favorite|
#     json.favorite do
#         json.extract! favorite, :id, :listing_id, :saver_id
#     end
# end

@favorites.each do |favorite|
    json.set! favorite.listing_id do 
        json.extract! favorite,
            :id,
            :saver_id,
            :listing_id
    end
end