const express = require("express")
const ejs = require("ejs")
const bodyParser = require('body-parser')
const https = require('https')
const date = require(__dirname + '/date.js');
const app = express()
var items = ["Sample Item"]
var workItems = []

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("assets"))

app.get("/", function(req, res){
  var formattedDate = date();
  res.render('list', {listTitle: formattedDate, items: items, formRoute:"/"})
})

app.post("/", function(req, res){
  var item = req.body.newItem;
  items.push(item)
  res.redirect("/")
})



app.get("/work", function(req, res){
  res.render('list', {listTitle: "work", items: workItems, formRoute:"/work"})
})

app.post("/work", function(req, res){
  var item = req.body.newItem;
  workItems.push(item)
  res.redirect("/work")

})


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started successfully(3000)");
})
