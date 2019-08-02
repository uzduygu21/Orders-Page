const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

app.use(cors({origin:"http://localhost:4200", credentials:true}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/myorders", {useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',()=>{
  console.log("Connection error");
})
db.on('open',()=>{
  console.log("Connection established");
})

const UserSchema = mongoose.Schema({
  fullname:{
    type:String
  },
  username:{
    type:String
  },
  password:{
    type:String
  }
})

const User = mongoose.model('user', UserSchema);

const productsData=[
    {
        "orderNumber": 1,
        "customer": "Alex",
        "vehicle": "GDN-0011",
        "orderDate": "March 19, 2016",
        "orderType": "Parts Order",
        "TotalAmount": 19.95
      },
      {
        "orderNumber": 2,
        "customer": "Nathan",
        "vehicle": "GDN-0023",
        "orderDate": "March 18, 2016",
        "orderType": "Parts Order",
        "TotalAmount": 32.99
      },
      {
        "orderNumber": 5,
        "customer": "Divya",
        "vehicle": "TBX-0048",
        "orderDate": "May 21, 2016",
        "orderType": "Parts Order",
        "TotalAmount": 8.9
      },
      {
        "orderNumber": 8,
        "customer": "Michelle",
        "vehicle": "TBX-0022",
        "orderDate": "May 15, 2016",
        "orderType": "Parts Order",
        "TotalAmount": 11.55
      },
      {
        "orderNumber": 10,
        "customer": "Yigit",
        "vehicle": "GMG-0042",
        "orderDate": "October 15, 2015",
        "orderType": "Parts Order",
        "TotalAmount": 35.95
      },
      {
        "orderNumber": 6,
        "customer": "Nanda",
        "vehicle": "GDN-0090",
        "orderDate": "March 22, 2018",
        "orderType": "Accessory Order",
        "TotalAmount": 19.95
      },
      {
        "orderNumber": 12,
        "customer": "Selena",
        "vehicle": "GDN-0890",
        "orderDate": "January 21, 2019",
        "orderType": "Accessory Order",
        "TotalAmount": 29.95
      },
      {
        "orderNumber": 11,
        "customer": "Maya",
        "vehicle": "GMG-0981",
        "orderDate": "March 07 2019",
        "orderType": "Accessory Order",
        "TotalAmount": 89.95
      }
]

// app.post("/register",(req,res)=>{
//   User(req.body).save();
//   res.send(req.body);
// })

app.post("/register",async(req,res)=>{
  try{
    const result=await User(req.body).save();
    res.send(result);
  }
  catch(ex){
    res.status(403).send(ex.message);
  }
})

app.post("/login",(req,res)=>{
  const token=jwt.sign({"username":req.body.username},"secret123",{expiresIn:'2h'})
  User.find({username:req.body.username, password:req.body.password})
    .then(data=>{
      if(!data || data.length===0){
        console.log("Invalid authenticate")
      }else{
        res.status(200).send({
          token:token
        })
      }
    })
    .catch(err=>{
      res.status(200).send("Invalid authenticate")
    })
})

app.use((req,res,next)=>{
  const token=req.body.token || req.params.token || req.headers.token;
  if(!token){
    res.send("Invalid request");
  }else{
    jwt.verify(token, "secret123",(err,decoded)=>{
      if(err){
        return "Invalid token"
      }else{
        next();
      }
    })
  }
})

app.get("/orders",(req,res)=>{
  return res.status(200).send(productsData);
})

app.listen(3000,()=>{
    console.log("Server is running @localhost:3000")
})
