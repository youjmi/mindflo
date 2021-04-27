const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  title: { type: String, required: true },
  post: { type: String, required: true },
  photo: { data: Buffer, type: String },
  like: { type: Boolean, default: "false" },
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
