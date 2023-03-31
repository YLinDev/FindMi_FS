{
	entities: {
		users: {
			1: {
				id: 1, 
				email: "user1@findmi.com"
			},

			2: {
				id: 2,
				email: "user2@findmi.com"
			}
		},

		listings: {
			1: {
				id: 1, 
				price: 100000,
				bedrooms: 2,
				bathrooms: 2,
				sqft: 800,
				address: '123 Main Street New York, NY 10001',
				listing_type: 'sale',
				year_built: '2000',
				description: "2 bed, 2 bath in the middle of the city"
				condo: false,
				air_cond: 'window',
				parking: '1 garage',
				monthly_hoa_fee: 0,
				price_per_sqft: 125,
				overview: "Very nice home, don't miss this great home near the train station"
				views: 1,
				saves 1,
				owner_id: 1 
			},
			2: {
				id: 2, 
				price: 500000,
				bedrooms: 3,
				bathrooms: 2,
				sqft: 1000,
				address: '321 Main Street New York, NY 10001',
				listing_type: 'sale',
				year_built: '2007',
				description: "3 bed, 2 bath with great view of the city"
				condo: false,
				air_cond: 'window',
				parking: 'none',
				monthly_hoa_fee: 500,
				price_per_sqft: 500,
				overview: "Make this yours, situated in a lovely neighborhood and nearby all transportation"
				views: 10,
				saves 5,
				owner_id: 2 
			}
		},
		favorites: {
			1: {
				id: 1,
				owner_id: 1,
				listing_id: 1
			},

			2: {
				id: 2, 
				owner_id: 2, 
				listing_id: 2
			}
		}
	},

	ui: {
        loading: true/false,
        modal: true/false
    },

    errors: {
        login: ["Incorrect username/password combination"],
        listingForm: ["Description can't be blank"],
    },

    session: {
        currentUserId: 213,
        session_token: "BCrypt_session_token"
    }
}