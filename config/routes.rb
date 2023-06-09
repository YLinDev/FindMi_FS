Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :favorites, only: [:index, :create, :destroy]
    get "listings/search/:query", to: "listings#search"
    resources :listings, only: [:show, :create, :destroy, :index, :update]
    resource :session, only: [:show, :create, :destroy]
  end
  get '*path', to: "static_pages#frontend_index"
end
