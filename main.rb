require 'rubygems'
require 'sinatra'

set :sessions, true

get "/" do 
  "hello there :)" 
end

get "/template" do 
  erb :first_template 
end

get "/nested" do 
  erb :"/subfolder/nested"
end




