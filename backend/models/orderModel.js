const { model } = require("mongoose");

const { OrdersSchema } = require("../Schemas/ordersSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };
