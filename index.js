const express=require("express");
const device=require("express-device");
const app=express();
const router=express.Router();
const port=process.env.PORT || 3000;

	app.use(device.capture());
router.get("/login",(req,res)=>{
	if(req.device.type=="desktop")
	{
		res.send("welcome to view my website desktop site");
	}
	else
	{
		res.sendFile("Welcome to  view my website in Mobile");	
	}
});

router.get("/logout",(req,res)=>{
	res.json({"Message":"successfully logged out"})
});

app.use("/aswinkumar",router);
app.listen(port,()=>{
console.log("server running....!");
});
