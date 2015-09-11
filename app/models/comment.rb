class Comment < ActiveRecord::Base
  before_save :defaults
  belongs_to :restaurant
  validates :restaurant, presence: true
  has_ancestry

  def defaults
    self.rank ||= 0
  end

  def self.upvote(id)
    comment = find(id)
    comment.update_attributes(rank: comment.rank.to_i + 1)
  end
end
