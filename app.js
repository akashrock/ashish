var express =require('express')
var app = express()
app.get('/',function(req,res)
{
res.writeHead(200)
res.write("server is create")
res.end()
})
app.listen(8080)
