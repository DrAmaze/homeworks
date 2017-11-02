require 'rails_helper'

describe User do

  subject(:user) do
    FactoryGirl.build(:user,
      email: "EigerDreams@president.gov",
      password: "gangsta")
  end


  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6)  }
  end

  describe 'class methods' do
    describe 'is_password?' do
      it 'should verify the password is the password' do
        expect(user.is_password?("gangsta")).to be true
      end

      it 'should verify the password is the password if given wrong pw' do
        expect(user.is_password?("lemons")).to be false
      end
    end

    describe 'reset_session_token' do
      it 'provides a brand new, shiny session token' do
        old_session_token = user.session_token
        user.reset_session_token!
        expect(user.session_token).to_not eq(old_session_token)
      end

      it 'give new token' do
        expect(user.reset_session_token!).to eq(user.session_token)
      end
    end

    describe '.find_by_credentials' do
      before { user.save! }

      it 'successfully finds a user' do
        expect(User.find_by_credentials("EigerDreams@president.gov", "gangsta")).to eq(user)
      end
    end
  end

end
