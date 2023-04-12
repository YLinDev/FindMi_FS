# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  saver_id   :bigint
#  listing_id :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
    validates :saver_id, :listing_id, presence: true
    validates_uniqueness_of :saver_id, scope: :listing_id

    belongs_to :saver,
        class_name: :User,
        foreign_key: :saver_id

    belongs_to :listing,
        class_name: :Listing,
        foreign_key: :listing_id
end
