const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image_id: {
    type: String,
  },
  image_local_path: {
    type: String,
  },
  image_cloud_url: {
    type: String,
  },
  image_name:{
    type:String,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
