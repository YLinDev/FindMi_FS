class Api::FavoritesController < ApplicationController
    # wrap_parameters include: Favorite.attribute_names
    before_action :require_logged_in


    def index 
        @favorites = current_user.favorites
        @current_user = current_user 
        render :index
    end

    def create 
        @favorite = Favorite.new(favorite_params)
        @favorite.save! 
        render :show
    end

    def destroy 
        @favorite = Favorite.find(params[:id])
        if (@favorite.saver_id === current_user.id) 
            @favorite.destroy
            render :show
        end
    end

    private

    def favorite_params
        params.require(:favorite).permit(:saver_id, :listing_id)
    end

end