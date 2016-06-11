var http=require('http')
var server=http.createServer(function(req,res) {
res.writeHead(200,{"contentType":"text/TML"})
var Name="Suneel";
var Dept="MCA";
var email="suneel50@gmail.com";
res.write("<h2>Name:</h2>" +
	Name+"<br>"+"<h2>Dept:</h2>"+Dept+"<br>"+"<h2>email</h2>"+email)
})
server.listen(9090)