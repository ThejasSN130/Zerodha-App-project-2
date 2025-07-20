const { model } = require("mongoose");

const { HoldingsSchema } = require("../Schemas/holdingSchema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
