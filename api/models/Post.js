const mongoose = require ("mongoose");
const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique:true
    },
    body:{
        type: String,
        required: true,
        
    },
    photo:{
        type: String,
        
        
    },
    username:{
        type: String,
        required:true
        
    },
    categories:{
        type: Array,

    },
    
},{timestamps:true})


module.exports= mongoose.model("Post", PostSchema)