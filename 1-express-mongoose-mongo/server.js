const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const app = express()

mongoose.connect('mongodb://localhost/testbase7', {useNewUrlParser: true, useCreateIndex: true})
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

const itemSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      short: String,
      long: String
    }
  });

const Item = mongoose.model('items2', itemSchema)

const testInstance = new Item()
testInstance.name = 'computer2'
testInstance.description.short = 'a nice laptop'
testInstance.description.long = 'this is a powerful laptop'
testInstance.save(function (err) {
    console.log('We are now attempting to save our instance')
    //Through logging our error we will either log null or the actual error in our terminal
    console.log(err)
})

app.use(bodyParser.urlencoded({extended: false}))
app.get('/', function(req, res){
 res.json({someProperty : "Some value"})
})

app.listen(3000, function(){ console.log('Node server listening on port 3000');});