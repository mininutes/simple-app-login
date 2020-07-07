const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const users =  require('./routes/api/users');

const app = express();

// activating cors
// app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());

//DB configuration
const db = require('./config/keys').mongoURI;

//connect to MongoDB Atlas
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

//use routes
app.use('/api/users', users);

//setting server port
const port = process.env.PORT;

app.listen(port, () => console.log(`server is running on port: ${port}`));
