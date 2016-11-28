Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  root 'home#index'

  get 'news' => 'home#my_news', :as => :public_news
  get 'glossary' => 'home#glossary', :as => :public_glossary
  get 'tips' => 'home#investment_tips', :as => :public_tips
  get 'module' => 'home#learning_module', :as => :public_module
  get 'news/:slug' => 'home#news_view', :as => :public_news_view
  get 'tips/:slug' => 'home#investment_tips_view', :as => :public_tips_view
  get 'lookup' => 'home#perform_search', :as => :public_perform_search
  get 'contact' => 'home#contact_us', :as => :public_contact_us
  post 'contact' => 'home#send_contact', :as => :public_send_contact

  devise_for :admins

  namespace :admins do
    get 'dashboard' => 'dashboard#index'
    get 'preferences' => 'dashboard#preferences'

    post 'preferences' => 'dashboard#save_preferences'

    put 'update_full_name' => 'dashboard#update_full_name'
    put 'update_password' => 'dashboard#update_password'

    resources :admins, :except => [:show, :edit]
    resources :tags, :except => [:show]
    resources :glosarries
    resources :news
    resources :newsletter_queues
    resources :learning_modules
    resources :investment_tips
  end
end
