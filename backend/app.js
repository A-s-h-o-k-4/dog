const express = require('express');
const app = express();
const cors = require('cors');
const frame = require('./schema.js')
const env = require('dotenv')
const db = require('./db.js')
env.config()

app.use(express.json());
app.use(cors());

app.post('/signup',async (req,res)=>{
    const {name,email,password} = req.body;
    console.log(name,email,password);
    try {
        const match = await frame.findOne({email : email})
        if (match) {
            res.json({message:`Already Join ${email} User`,method:false})            
        }else{
           await frame.insertOne({name:name,email:email,password:password})
            res.json({message:`Successfully Recived ${name}`,method:true})    
        }
    } catch (error) {
        console.log('error',error); 
    }
})

app.post('/login',async (req,res)=>{
    try{
        console.log(req.body)
        const {email,pass} = req.body;
        const verify = await frame.findOne({email : email})
        if (verify.email == email && pass == verify.password) {
            res.json({message:'Verified Data',method:true})   
        }else{
            res.json({message:'Not Matched Password',method:false})
        }
    }catch(err){
        console.log(err)
    }
})

app.listen(3000,()=>{
    db();
})