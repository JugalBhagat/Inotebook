const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/note'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

  
