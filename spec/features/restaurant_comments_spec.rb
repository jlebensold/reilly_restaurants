require 'rails_helper'

describe 'restaurant-comments', js: true do
  let(:restaurant_name) { 'Hamburger Joint' }
  let!(:restaurant) { Restaurant.create(name: restaurant_name, description: 'restaurant description') }

  before do
    visit restaurant_path(restaurant)
  end

  it 'shows restaurant description' do
    expect(page).to have_content('restaurant description')
  end

  it 'add comments' do
    within '.row form' do
      fill_in :author, with: 'Jon'
      fill_in :body, with: 'Delicious'
      find_button('Submit').click()
    end
    sleep 0.1
    expect(Comment.all.size).to eq 1
    expect(page.body).to have_content 'Delicious'
  end
  
end
