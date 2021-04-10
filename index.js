var express = require('express');
var app = express();
const Web3 = require('web3')

const handler = require('serve-handler');
const http = require('http');
 
const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
})
 
server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});

app.set("view engine","ejs");

// app.listen(3004,function() 
// {  
//     console.log("Serving App");
// })

app.get("/",function(req,res)
{
    res.render("landing");
})

