# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  validates :email, :session_token, presence: true, uniqueness: true
  validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, allow_nil: true, length: { in: 6..255 }

  before_validation :ensure_session_token

  has_many :listings,
    foreign_key: :owner_id,
    dependent: :destroy,
    inverse_of: :user

  has_many :favorites,
    foreign_key: :saver_id,
    dependent: :destroy,
    inverse_of: :saver

  has_many :saved_listings, through: :favorites, source: :listing

  def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      if user 
        return user if user.authenticate(password)
      else
        return nil 
      end 
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private 

  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end
