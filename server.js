var express=require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/');
var detail=require('./model/details.js');


app.post('/details',function(req,res){
    var info =req.body;
    var  detai= new detail({
        name:info.name,
        age:info.age,
        address:info.address
    });

    detai.save(function(err,response){
    if(err)
    {
        res.send("error");
    }
    else{
        res.json('success');
    }

 })    
});



app.get('/show',function(req,res){          
    detail.find(function(err,response){
        res.json(response);
    })
});




 app.delete('/delete',function(req,res){
    var na =req.body.name;
    detail.deleteOne({name:na},function(err,response){
        if(err)
            res.json('error');
        else
        res.json('success delete');
    })
 });

app.listen(3010);
