const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);

mongoose.connect("mongodb://localhost:27017/profile", {
  useNewUrlParser: true
});

const db = mongoose.connection;

const profileSchema = new mongoose.Schema({
  // id: { type: Number, require: true, unique: true },
  id: Number,
  name: String,
  ccNum: Number,
  expMonth: Number,
  expYear: Number,
  cvc: Number
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports.Profile = Profile;
module.exports.db = db;
