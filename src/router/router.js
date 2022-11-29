const express = require("express");
const Movie = require("../models/movie");
const router = new express.Router();
const {Console} = require("console");
const fs = require("fs");



const errLogger = new Console({
    stdout: fs.createWriteStream("myErr.txt")
  });


//Every Movie
router.post("/movies",async (req,res)=>{ 
    try
    {
        const newMovie = new Movie(req.body);
        const insertMovie = await newMovie.save({}); 
        res.status(200).send(insertMovie);
    }
    catch(e)
    {
        errLogger.log(e);
    }    
})


router.get("/movies",async (req,res)=>{ 
    try
    {
        const getMovie = await Movie.find({});
        res.status(200).send(getMovie);
    }
    catch(e)
    {
        errLogger.log(e);
    }    
})


router.delete("/movies",async (req,res)=>{ 

    try
    {
        const delMovie = await Movie.deleteMany({});
        res.status(200).send( delMovie);
    }
    catch(e)
    {
        errLogger.log(e);
    }    


});

//Every single Movie

router.get("/movies/:id",async (req,res)=>{
    try
    {
        const _id = req.params.id;
        const getMov = await Movie.findById(_id);   
        res.status(200).send(getMov);
    }
    catch(e)
    {
        errLogger.log(e);
    }
    })

router.patch("/movies/:id",async (req,res)=>{
    try
    {
        const _id = req.params.id;
        const updateMovie = await Movie.findByIdAndUpdate(_id,req.body,{new:true});   
        res.status(200).send(updateMovie);
    }
    catch(e)
    {
        errLogger.log(e);
    }
    })

router.delete("/movies/:id",async (req,res)=>{
    try
    {
        const _id = req.params.id;
        const delsMovie = await Movie.findByIdAndDelete(_id);   
        res.status(200).send(delsMovie);
    }
    catch(e)
    {
        errLogger.log(e);
    }
    })    


module.exports = router;