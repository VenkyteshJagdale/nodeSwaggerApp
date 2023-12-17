const mongoose = require("mongoose"),
connection = require("./mongoConnetion");

let address = {
    lane_No: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    zipcode: {
      type: Number,
      required: true
    }
}

const userSchema = mongoose.Schema({
  _id: { 
    type: mongoose.Types.ObjectId, 
    auto: true 
  },
  userRegisterId:{
    type:Number,
    required:true,
    unique: true 
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  phone: {
    type: Number,
    required: true
  },
  address:[address]
},{
  timestamps: true,
});

module.exports = mongoose.model("user", userSchema);
