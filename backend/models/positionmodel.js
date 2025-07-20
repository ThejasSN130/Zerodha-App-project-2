const { model } = require("mongoose");

const { PositionsSchema } = require("../Schemas/positionSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
