const express=require("express");
const device=require("express-device");
const app=express();
const router=express.Router();

	app.use(device.capture());
	app.use("/aswinkumar",express.static("https://github.com/aswinkumarbaskar/device-dettctor"))
router.get("/login",(req,res)=>{
	if(req.device.type=="desktop")
	{
		res.sendFile("index.html");
	}
	else
	{
		res.sendFile("C:/Users/Suganya/AppData/Roaming/Sublime Text 3/Packages/User/node/express/aSAMPLES/images/index.html");	
	}
});

router.get("/logout",(req,res)=>{
	res.json({"Message":"successfully logged out"})
});

app.use("/aswinkumar",router);
app.listen(8080,()=>{
console.log("server running....!");
});
