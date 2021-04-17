const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  // date: { type: Date, default: Date.now },
  // user: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User"
  //   }
  // ],

});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
