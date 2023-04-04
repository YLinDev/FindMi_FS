# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember email, and password:
    User.create!(
      email: 'demo@user.io', 
      password: 'password'
    )
    
    # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
    
    # puts "Creating listing..."
    Listing.create!(
      price: 123456.78, 
      bedrooms: 2,
      bathrooms: 1,
      sqft: 900, 
      address: "123 Main Street, New York, NY 10001",
      listing_type: "sell",
      year_built: "2007",
      description: "2 bed, 1 bath in the middle of the city",
      condo: true, 
      air_cond: 'window',
      parking: '1 garage',
      monthly_hoa_fee: 0,
      price_per_sqft: 137,
      overview: "Very nice home, don't miss this great home near the train station",
      views: 0,
      saves: 1,
      owner_id: 1
    )

    Listing.create!(
      price: 500000, 
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1000, 
      address: "321 Main Street, New York, NY 10001",
      listing_type: "sell",
      year_built: "2007",
      description: "3 bed, 2 bath with a great view of the city",
      condo: false, 
      air_cond: 'window',
      parking: 'none',
      monthly_hoa_fee: 500,
      price_per_sqft: 500,
      overview: "Make this yours, situated in a lovely neighborhood and nearby all transportation",
      views: 10,
      saves: 5,
      owner_id: 2
    )

    Listing.create!(
      price: 300000, 
      bedrooms: 1,
      bathrooms: 1,
      sqft: 600, 
      address: "333 Main Street, New York, NY 10001",
      listing_type: "sell",
      year_built: "2012",
      description: "One loft studio",
      condo: false, 
      air_cond: 'none',
      parking: 'none',
      monthly_hoa_fee: 500,
      price_per_sqft: 500,
      overview: "Great Neighborhood",
      views: 0,
      saves: 0,
      owner_id: 1
    )

    puts "Done!"
  end