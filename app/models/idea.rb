class Idea < ActiveRecord::Base
  scope :date_type,  -> (date_type){ where("lower(date_type) LIKE ?", "%#{date_type.downcase}%") }
  scope :drinks, -> (drinks){ where("drinks = ?", "#{drinks}") }
  scope :romantic,  -> (romantic){ where("romantic = ?", "#{romantic}") }
  scope :hipster, -> (hipster){ where("hipster = ?", "#{hipster}") }
  scope :speakeasy, -> (speakeasy){ where("speakeasy = ?", "#{speakeasy}") }
  scope :date_number,  -> (date_number){ where("lower(date_number) LIKE ?", "%#{date_number.downcase}%") }
  def as_json(options=nil)
    #user.as_json(except: [:id, :created_at, :age])
    super(except: [:created_at, :updated_at])
  end
end
