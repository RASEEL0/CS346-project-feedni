
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/experiences');

const experienceSchema = new mongoose.Schema({
  content: String,
  createdAt: Date
});

const Experience = mongoose.model('Experience', experienceSchema);

// Route to handle share experience request
app.post('/share-experience', (req, res) => {
  const content = req.body.experience;
  
  const experience = new Experience({
    content,
    createdAt: new Date() 
  });
  
  experience.save()
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send(); 
    });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});