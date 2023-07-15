const mongoose = require("mongoose");

const dataModel = mongoose.model("values",mongoose.Schema(
    {
        ename:{
            type:String,
            required:true
        },

        edes:{
            type:String,
            required:true
        },
    
        edate:{
            type:String,
            required:true
        },

        etime:{
            type:String,
            required:true
        }



    }

))


module.exports = {dataModel}