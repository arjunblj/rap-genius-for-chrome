require 'sinatra'
require 'JSON'
require 'rapgenius'

# list all
get '/:id' do
  content_type :json

  output = RapGenius.search(params[:id])

  if output.nil? then
    status 404
  else
    songArray = []

    output.each do |output|
      songArray.push([output.title, output.artist.name, output.url])
    end
    
    status 200
    body(JSON.pretty_generate(songArray))
  end
end