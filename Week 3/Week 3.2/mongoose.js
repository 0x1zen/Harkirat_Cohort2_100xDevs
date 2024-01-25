const express=require('express');
const app=express();
const mongoose=require('mongoose');


const User = mongoose.model('Users', { name: String , email: String , password: String});
app.use(express.json());
app.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existingUser=await User.findOne({email : username});
    if(existingUser){
        return res.status(400).send("Username Already exists");
    }

    const user=new User({
        name: name,
        email: username,
        password: password
    });
        user.save();
        res.json({
            msg:"User Created Successfully"
        })
})

app.listen(3000);



