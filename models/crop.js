const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    name: {
        teatype:{
            type: String,
            trim:true,
        }
        
    }