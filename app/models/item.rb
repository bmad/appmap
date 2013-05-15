class Item < ActiveRecord::Base
  attr_accessible :automated_test, :created, :manual_test, :name, :notes
  before_create :set_creation

  def set_creation
    self.created = Time.now
  end

end
