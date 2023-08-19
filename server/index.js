const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


// middleware
app.use(cors());
app.use(express.json());    //req.body

// routes

// create a todo
app.post('/todos',async(req,res)=>{
    try{
const {description} = req.body;
const newTodo = await pool.query(
    "INSERT INTO todo (description) VALUES($1)",
    [description])

res.json(newTodo);
    }catch(error){
        console.log("error",error)
    }
})

// get all todo

// get a todo 

// update a todo

// delete a todo

app.listen(5000, ()=>{
    console.log(`server is stsarted in the port number 5000`)
})