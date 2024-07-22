const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
// const Router=require('express');
// var router=Router();
const mongoose=require('mongoose');
const query =require ('./Models/queries.js')

app.use(
    cors({ 
      origin: "http://localhost:3000",
    })
  );
// app.use(express.json());
const port=5000;

app.listen(port,()=>{
    console.log(`server is runnning on port ${port}`)
});

app.use(express.json());
// app.use('/',routes);
// dotenv.config();
const uri="mongodb://localhost:27017/Certi-App";
mongoose.connect(
    uri   
);
const database = mongoose.connection;
database.on("error",(error)=>{
    console.log(error);
});
database.once("connected",()=>{
    console.log("Database Connected");
});    
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.post('/submit-form',async(req,res)=>{
    console.log(req.body)

    try{
        const data=req.body;
        const result=await query.create(data);
        res.status(201).json(result);
    
    }
    catch(error){
        console.log(error);
        res.status(500).json();
    }
 });
    
app.get('')


app.get('/certificate', (req,res) => {
    res.json(certificates);
})

app.get("/certificate/:certificateID",async (req, res) => {
const id=req.params.certificateID
console.log(id)
const data =await query.findOne({cert_id:id})
          res.json(data)
});

app.get('/api/certificate/:id',async (req, res) => {
    console.log("reached")
    const id = req.params.id;

    const details = await query.findOne({cert_id: id});
    res.json(details);
});
module.exports=app;