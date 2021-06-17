const express = require('express');
const app = express();
const port = 8080;
let fs = require('fs');


app.get('/contact-me',(req,res)=>{
  //res.send()
  fs.readFile("./contact-me.html",function(err,data){
    if(err)
    {
      console.log(err);
    }

    res.send(data);
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.write(data);
    //return res.end();
  });
});

app.get('/about',(req,res)=>{
  //res.send()
  fs.readFile("./about.html",function(err,data){
    if(err)
    {
      console.log(err);
    }

    res.send(data);
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.write(data);
    //return res.end();
  });
});


app.get('/',(req,res)=>{
  //res.send("reach");
  

  fs.readFile("./index.html",function(err,data){
    if(err)
    {
      console.log(err);
    }

    res.send(data);
  });
});

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});


/*


app.get('/about',(req,res)=>{
  //res.send()
  fs.readFile("/about.html",function(err,data){
    if(err)
    {
      console.log(err);
    }

    res.send(data);
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.write(data);
    //return res.end();
  });
});*/

/*
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

  var q = url.parse(req.url, true);
  let path = '';

  if(q.pathname==="/")
  {
    path = "index";
  }
  else if(q.pathname !== '/about' && q.pathname !== 'contact-me')
  {
    path = "404";
  }
  else
  {
    path = q.pathname;
  }
  var filename = "./" + path+".html";

  console.log(filename);

  fs.readFile(filename,function(err,data){
    if(err)
    {
      console.log(err);
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8080);*/