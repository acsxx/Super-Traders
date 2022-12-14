const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const routes = require('./routes/index.js')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))


//DB Connection
const db = require("./config/db-connection")

db.authenticate()
  .then(() => console.log("db connected"))
  .catch((err) => console.error(err));

  
//router middleware
app.use('/api', routes);

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})