class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    @user = user
    mail(to: user.email, subject: 'Welcome to My Awesome Cats Site')
  end
end
