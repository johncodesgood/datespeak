class Idea < ActiveRecord::Base
  scope :date_type,  -> (date_type){ where("lower(date_type) LIKE ?", "%#{date_type.downcase}%") }
  scope :drinks, -> (drinks){ where("drinks = TRUE") }
  scope :romantic,  -> (romantic){ where("romantic = FALSE") }
  scope :hipster, -> (hipster){ where("hipster = ?", "#{hipster}") }
  scope :date_number,  -> (date_number){ where("lower(date_number) LIKE ?", "%#{date_number.downcase}%") }
  def as_json(options=nil)
    #user.as_json(except: [:id, :created_at, :age])
    super(except: [:created_at, :updated_at])
  end
end
