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

}).listen(8080);