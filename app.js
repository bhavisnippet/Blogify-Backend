const express = require('express');
const app = express();
const PORT = 3002;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
require('dotenv').config();
app.use(express.static('public'));


// Connecting MongoDB With NodeJS
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err))
  
// Blogify Model 
const Blog = require("./models/blog")  
    
// GET Route
app.get('/blogifyy/blogs', async (req, res) => {
  try {
    const response = await Blog.find();
    console.log("Data Feched!");
    res.status(200).json(response)
  } catch (error) {
    console.log("Error fetching employee data");
    res.status(500).json("Internal server error", error);
  }
})

// POST Route 
app.post('/blogifyy/blogs', async (req, res) => {
  try {
    const data = req.body;
    const newBlog = new Blog(data);
    const response = await newBlog.save();
    console.log("Data saved!");
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching employee data");
    res.status(500).json("Inernal server error:", error); 
  }
})

// Server running 
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
