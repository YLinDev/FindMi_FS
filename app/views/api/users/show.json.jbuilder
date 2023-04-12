json.user do
    json.extract! @user, :id, :email
    json.favorites do 
        json.array! @favorites
    end
end
