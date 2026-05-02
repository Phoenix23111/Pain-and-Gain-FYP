const mongoose = require("mongoose");
const validator = require("validator")


const UserSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique:[true,"Email Already Exists"],
    required: [true,"Please Enter your Email"],
    validate: validator.default.isEmail,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic:{
    type:String,
    //required: [true,"Please add Photo"],
  },
  role:{
    type: String,
    enum:["admin","user"],
    default:"user"
  },
  gender:{
    type: String,
    enum:["male","female"],
   // required: [true,"Please Enter your gender"],
  },
  dob:{
    type: Date,
    //required: [true,"Please Enter your Date of Birth"],
  },

},
{
  timestamps:true
});


UserSchema.virtual("age").get(function(){
  const today = new Date()
  const dob = this.dob
  let age = today.getFullYear - dob.getFullYear
  if (today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth() && today.getDate() <dob.getDate())
  {
    age--
  }
  return age;

})
const User = mongoose.model("users", UserSchema);
User.createIndexes();
const UserModel = User

module.exports = UserModel;
