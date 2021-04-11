const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
  day: { 
      type: Date, default: Date.now 
    },
    selfcare: [{
        type: {
            type: String, 
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: {
            type: Number,
        },
        mood: {
            type: Number,
        }

    }]
});

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

module.exports = Dashboard;
