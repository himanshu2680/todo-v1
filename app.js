const express = require("express")
const ejs = require("ejs")
const bodyParser = require('body-parser')
const https = require('https');
const app = express()
var items = ["Sample Item"]
var limitReached = false;
var pattern = ''

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("assets"))

app.get("/", function(req, res){
  var date = new Date()
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  var formattedDate =  dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate()
  res.render('list', {listTitle: formattedDate, items: items, limitReached: limitReached, pattern: pattern})
})

app.post("/", function(req, res){
  var item = req.body.newItem;
  items.push(item)
  res.redirect("/")
})



// app.get("/work", function(req, res){
//   res.render('list', {listTitle: "work", items: items, limitReached})
// })


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started successfully(3000)");
})
