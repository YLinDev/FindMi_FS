class Api::ListingsController < ApplicationController
    # before_action :require_logged_in, only: [:create, :edit, :update]
    wrap_parameters include: Listing.attribute_names + [:photo]

    def index 
        @listings = Listing.all
        render :index
    end

    def show 
        @listing = Listing.find(params[:id])
        render :show
    end
    
    def update
        @listing = Listing.find(params[:id])
        if (@listing.update(listing_params))
            render :show
        else
            render json: { errors: @listing.errors.full_messages }, status: 422
        end
    end

    def create
        @listing = Listing.new(listing_params)
        # @listing.owner_id = params[:owner_id]
        if @listing.save! 
          render :show 
        else
          render json: { errors: @listing.errors.full_messages }, status: 422
        end
    end
    
    def destroy
        @listing = Listing.find(params[:id])
        unless @listing 
            render json: { message: 'Unauthorized' }, status: :unauthorized
            return 
        end
        @listing.destroy 
        render :show 
    end

    def search 
        term = params[:query]
        if term 
            @listings = Listing.where("lower(address) LIKE ?", "%#{term.downcase}%")
        else 
            @listings = Listing.all 
        end
        render :index
    end

    private
    
    def listing_params
        params.require(:listing).permit(
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
            photos: []
        )
        .deep_transform_keys!(&:underscore)
    end
end