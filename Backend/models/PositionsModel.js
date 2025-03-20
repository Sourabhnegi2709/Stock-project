const { model } = require("mongoose");


const { PositionsSchema } = require("../Schema/PositionsSchema.js");

const PositionsModel = new model("position", PositionsSchema);

module.exports = {PositionsModel};