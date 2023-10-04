const  mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {type:String, unique:true},
    password: String,
}, {timeStamps: true}

);
//  const UserModel = mongoose.model('User', UserSchema)
//  module.exports = UserModel
 module.exports = mongoose.model("User", UserSchema)