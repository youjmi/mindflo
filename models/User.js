const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   username: {type: String, required: true},
   password: {type: String, required: true},

   blog: [
     {
       type: Schema.Types.ObjectId,
       ref: "Blog"
     }
   ],
   dashboard: [
    {
      type: Schema.Types.ObjectId,
      ref: "Dashboard"
    }
  ]


});

const User = mongoose.model("User", userSchema);

module.exports = User; 

