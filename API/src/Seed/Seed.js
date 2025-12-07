// seed.js - populate MongoDB with sample movies

const mongoose = require("mongoose");
require("dotenv").config();

// Load Movie model
const Movie = require("../Models/Movie.js");

// Sample movie data
const movies = [
  { title: "Avatar", genre: "Sci-Fi", price: 20 },
  { title: "Inception", genre: "Sci-Fi", price: 22 },
  { title: "The Lion King", genre: "Animation", price: 15 },
  { title: "The Avengers", genre: "Action", price: 25 },
  { title: "Interstellar", genre: "Sci-Fi", price: 24 },
  { title: "Joker", genre: "Drama", price: 18 },
];

// Connect and insert movies
async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Clearing old movies...");
    await Movie.deleteMany({});

    console.log("Inserting sample movies...");
    await Movie.insertMany(movies);

    console.log("✅ Seeding complete! Movies added to the database.");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
