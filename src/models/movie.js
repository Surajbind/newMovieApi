const express = require("express");
const mongoose  = require("mongoose");


const movieSchema = {
    name:String,
    img:String,
    summary:String,
 }

const Movie = mongoose.model("Movie",movieSchema);

module.exports = Movie;