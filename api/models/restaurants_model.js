import mongoose from "mongoose";


const UserRatingSchema = new mongoose.Schema({
    rating_text: String,
    rating_color: String,
    votes: String,
    aggregate_rating: String
});

const LocationSchema = new mongoose.Schema({
    latitude: String,
    longitude: String,
    address: String,
    city: String,
    city_id: Number,
    locality: String,
    locality_verbose: String,
    zipcode: String,
    country_id: Number
});

const RestaurantSchema = new mongoose.Schema({
    has_online_delivery: Number,
    price_range: Number,
    user_rating: UserRatingSchema,
    R: {
        res_id: Number
    },
    name: String,
    cuisines: String,
    is_delivering_now: Number,
    average_cost_for_two: Number,
    has_table_booking: Number,
    location: LocationSchema,
    featured_image: String,
    currency: String,
    id: String
}, { collection: 'restaurant' });




export const resmodel = mongoose.model("Restaurant", RestaurantSchema);