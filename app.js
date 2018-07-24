var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");


//serach Route
app.get("/",function(req,res){
  res.render("search");
 });
 
app.get("/search",function(req,res){
 res.render("search");
});

//results route 
app.get("/results",function(req,res){
   var moviename = req.query.search;
   var url ='http://www.omdbapi.com/?apikey=6d4d2ada&s='+moviename;
     request(url, function (error, response, body) {
       if(!error && response.statusCode ==200){
       var data = JSON.parse(body);
       res.render("results",{data:data});
     }
 }); 
});
//Listening on port 
app.listen(3000,function(){
  console.log("Running the Server...on Port 3000....");
});