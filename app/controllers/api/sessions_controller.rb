class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user 
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )
    if @user
      @favorites = @user.favorites
      login!(@user)
      render 'api/users/show'
    else 
      render json: { errors: ["Incorrect email or password. Please try again or click 'Demo User'."]}, status: 400
    end
  end

  def destroy
    if current_user 
      logout!
      render json: { message: 'Logged-Out'}
    end
  end

end
