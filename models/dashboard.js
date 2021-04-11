const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

module.exports = Dashboard;
