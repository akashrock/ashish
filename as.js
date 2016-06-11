var http=require('http')
var server=http.createServer(function(req,res) {
res.writeHead(200,{"contentType":"text/html"})
res.write("<DOCTYPE HTML>"+
	"<html>"+
	"<head>"+
	"<meta charset=UTF-8>"+
	"<title>form</title>"+
	"</head>"+
	
	"<body>"+
	"<form>"+
	"Username<input type='text'>"+
	"password"+"<input type='password'>"+
	"<button>login</button>"+
	"</form>"+
	"</body>"+
	
	"</html>"
	);
res.end();
})
server.listen(9090)