class Toy < ApplicationRecord
  belongs_to :corgi, polymorphic: true

  belongs_to :cat, polymorphic: true
end
