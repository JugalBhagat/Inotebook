const connectToMongo = require('./db');

connectToMongo();

const express = require('express');
var cors = require('cors');

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

//Available Routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/note'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

  
