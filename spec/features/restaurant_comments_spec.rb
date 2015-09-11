require 'rails_helper'

describe 'restaurant-comments', js: true do
  let(:restaurant_name) { 'Hamburger Joint' }
  let!(:restaurant) { Restaurant.create(name: restaurant_name, description: 'restaurant description') }

  context 'new comments' do
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

  context 'replies' do
    let!(:comment) { Comment.create!(author: 'JL', body: 'Delicious!', restaurant: restaurant) }

    it 'upvotes' do
      visit restaurant_path(restaurant)
      find_button('+1').click()
      expect(find('.comment.row .label.secondary.right')).to have_text '1'
    end
  end

  context 'polling comments' do
    let!(:comment) { Comment.create!(author: 'JL', body: 'Delicious!', restaurant: restaurant) }
    it 'updates via long polling' do
      visit restaurant_path(restaurant)
      Comment.create!(author: 'Jane Doe', body: 'I disagree', restaurant: restaurant, parent: comment)
      sleep 1
      expect(page).to have_content 'I disagree'
      expect(page).to have_content 'Jane Doe'
    end
  end

end
