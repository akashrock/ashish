var express= require("express")
var app=express();
app.get('/',function(req,res)
{
	var myarr=["red","green","blue"]
	res.render('login.ejs',
	{
		temp:myarr
	});
	res.end();
})
app.listen(8080)
console.log("hello ashish");