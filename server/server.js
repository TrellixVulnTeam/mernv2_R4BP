const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');


const config = require('./config');
const loadTestData = require('./testData');
const postRoutes = require('./routes/post.routes');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(mongoSanitize())


app.use('/api', postRoutes);
const buildPath = path.join(__dirname, '/../client/', 'build')
app.use(express.static(buildPath));  

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
})


app.listen(config.PORT, function(){
      console.log('Server work on:', config.PORT)
})


//mongoose

const mongoose = require('mongoose');

mongoose.connect(config.DB, { useNewUrlParser: true});
let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
  loadTestData();
})
db.on('error', (err) => console.log('Error ' + err));

