const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Effect = new Schema({
  description: { type: String, required: true },
  summon_requirement: { type: Number },
});

const Card = new Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["monster", "trap", "spell"],
    required: true,
  },
  attack: { type: Number, required: true },
  defense: { type: Number, required: true },
  effect: { type: Effect },
  summon_cost: { type: Number, min: 0, max: 10, required: true },
  image: { type: String, required: true },
  created_at: { type: Date, default: Date.now, required: true },
  last_modified: { type: Date, default: Date.now },
});

module.exports = mongoose.model("card", Card);
