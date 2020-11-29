const express =  require('express');
const mongoose =  require('mongoose');
const db =  require('./config/keys');
const items = require('./routes/api/items');

const PORT = process.env.PORT || 5000;

const app = express();

//express middleware

app.use(express.json());

// DB config and connect

mongoose.connect(db.mongoURI,{
   useNewUrlParser: true,
   useUnifiedTopology: true
   })
  .then(() => console.log('MongoDB connected ///'))
  .catch(err => console.log(err));

// Using Routes 
app.use('/api/items', items);

// Listen on port

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));