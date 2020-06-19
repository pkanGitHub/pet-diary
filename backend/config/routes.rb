Rails.application.routes.draw do

  # root 'pages#index'

  

  namespace :api do
    namespace :v1 do
      resources :pets do 
        resources :diaries
      end
    end
  end

  gets '/diaries', to: 'diaries#all_diaries'

  # route request that are not for existing path predefined in our API back to our index path
  # get '*path', to: 'pages#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
