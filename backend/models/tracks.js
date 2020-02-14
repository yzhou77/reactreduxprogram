var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//const autoIncrementModelID = require("./counterModel");

const trackSchema = new Schema({
  id: { type: Number, unique: true },
  tarcktitle: { type: String },
  artist: { type: String }
});

// trackSchema.pre("save", function(next) {
//   if (!this.isNew) {
//     next();
//     return;
//   }

//   autoIncrementModelID("activities", this, next);
// });

module.exports = mongoose.model("trackSchema", trackSchema);
