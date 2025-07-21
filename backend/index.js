const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/holdingModel");
const { PositionsModel } = require("./models/positionmodel");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");
const { OrdersModel } = require("./models/orderModel");
const allowedOrigins = [
  'https://zerodha-clone-cimi.onrender.com',
  'https://dashboard-kite-zerodha.onrender.com'
];

const app = express();
const dburl = process.env.ATLAS_URL;
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

mongoose
  .connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    newOrder.save();

    res.send("Order saved!");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
