const express = require('express');
const app = express();
const mysql = require('mysql');
const server = require("http").createServer(app);
const io = require("socket.io")(server,{cors:{origin:"*", methods: ['GET', 'POST']}});
var cors = require('cors');
app.use(cors());
app.set("view engine","ejs");

const db = mysql.createConnection({
    user : 'historian',
    host : '10.0.82.15',
    password : 'historian',
    database : 'kuma_lake_dam'
});

app.get('/waterLevel', (req, res)=>{
    db.query("SELECT * from dam ORDER BY timestamp DESC LIMIT 1", (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.get('/Generator', (req, res)=>{
    db.query("SELECT * from generators ORDER BY generator_number DESC LIMIT 1", (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/Generator_Outflow', (req, res)=>{
    db.query("SELECT sum(generator_power_output) as generation_outflow from generator_status", (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

server.listen(3001, ()=>{
    console.log("Server running on port 3001");
});
