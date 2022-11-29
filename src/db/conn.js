const mongoose = require("mongoose");
const db = process.env.mongodb || "mongodb://localhost:27017/filmsDB";

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((e)=> {
    console.log(e);
})