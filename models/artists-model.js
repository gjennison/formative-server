const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArtistSchema = new Schema(
  {
    name: String,
    imgURL: String,
    wikipedia: String,
    id: String,
    artwork: String,
  },
  {
    timestamps: false,
  }
);

// singular capitalized name for the mongo collection - Writer
module.exports = mongoose.model("Artists", ArtistSchema);
