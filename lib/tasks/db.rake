namespace :db do
  desc "TODO"
  task seed_data: :environment do

    require 'CSV'
    conn = PG::Connection.open({dbname: 'DateIdeasAPI_development'})

    CSV.foreach('DateIdeas2.csv', :headers => true) do |row|
      title = row["Idea"]
      place = row["Place"]
      address = row["Address"]
      area = row["Area of City"]
      price = row["Price"]
      place_link = row["Link"]
      date_number = row["Date Number"]
      time_of_year = row["Time of Year"]
      weekend_weekday = row["Weekend/Weekday"]
      indoor_outdoor = row["Indoors/Outdoors"]
      drinks = row["Drinks"]
      date_type = row["Type"]
      hipster = row["Hipster"]
      romantic = row["Romantic"]
      speakeasy = row["Speakeasy"]
      description_link = row["Description Link"]
      description = row["Description"]


      sql_statement = <<-eos
        INSERT INTO ideas
            (title, place, address, area, price, place_link, date_number, time_of_year, weekend_weekday, indoor_outdoor, drinks, date_type, hipster, romantic, speakeasy, description_link, description)
         VALUES
          ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
      eos

      conn.exec_params(sql_statement, [title, place, address, area, price, place_link, date_number, time_of_year, weekend_weekday, indoor_outdoor, drinks, date_type, hipster, romantic, speakeasy, description_link, description])
    end
    conn.close
  end

end
