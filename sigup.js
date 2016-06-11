var http=require('http')
var url=require('url')
var server=http.createServer(function(req,res) {
	var page=url.parse(req.url).pathname;
res.writeHead(200,{"content":"text/html"})
     if(page=='/login')
         {
	         res.write("welcome login page ashish singh")
         }
     else if(page=='/signup')
         {
             res.write("welcome signup page Ashish singh")
         }
     else
         {
	         res.write("this not signup and login")
         }
     res.end()
  })
 server.listen(8080)
