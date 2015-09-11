require 'rails_helper'

describe Restaurant do
  
  it 'returns name when to_s is called' do
    r = Restaurant.new(name: 'McDs')
    expect("#{r}").to eq 'McDs'
  end
end
