class Guest < ActiveRecord::Base
  attr_accessible :attending, :comment, :name, :party
end
