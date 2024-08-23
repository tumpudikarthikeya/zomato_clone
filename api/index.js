import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { resmodel } from "./models/restaurants_model.js";
import cors from 'cors'

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(
    () => {
        console.log("mongodb is connected")
    }).catch(err => {
        console.log(err);
    })
    
const app = express();

app.use(
    cors({
       origin:["http://localhost:5173"],
       methods:["GET","POST","PUT","DELETE"]

    })
);

app.use(express.json());

const Restaurant = resmodel;

app.listen(8000,()=> {
    console.log("server is running at port 8000");
})


app.get('/restaurants', async (req, res) => {
    const { page = 1, limit = 9 } = req.query; 
  
    try {
      const skip = (parseInt(page) - 1) * parseInt(limit);
      const restaurants = await Restaurant.find().skip(skip).limit(parseInt(limit));
      const totalRestaurants = await Restaurant.countDocuments();
      const totalPages = Math.ceil(totalRestaurants / parseInt(limit));
//   console.log(restaurants)
      res.json({
        restaurants,
        totalPages,
      });
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  


app.get('/restaurants/search/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ "id": id });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.send(restaurant);
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});
