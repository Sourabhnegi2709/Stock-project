if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
  }
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const auth = require("./middleware/auth");
const cookieParser = require("cookie-parser");


const { HoldingsModel } = require("./models/HoldingsModel.js");
const { PositionsModel } = require("./models/PositionsModel.js");
const { OrdersModel } = require("./models/OrdersModel.js");
const { UserModel } = require("./models/UserModel");

const port = process.env.PORT || 3001;
const uri = process.env.MONGO_URL

const app = express();
app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:5174", // ✅ Allow frontend origin
        credentials: true, // ✅ Allow cookies & authorization headers
        methods: "GET,POST,PUT,DELETE", // ✅ Allowed request methods
        allowedHeaders: "Content-Type,Authorization",
    })
)

app.use(bodyParser.json());

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log("🆕 Registering User:", email);
        console.log("🔑 Original Password:", password);

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log("🔐 Hashed Password Before Saving:", hashedPassword);

        const user = new UserModel({ name, email, password: hashedPassword });

        await user.save();

        console.log("✅ User Saved in DB:", user);

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("❌ Register Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
});

// ✅ Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ email });

        if (!user) {
            console.log("❌ User Not Found");
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "Login successful",
            user: { name: user.name, email: user.email },
            token });

    } catch (err) {
        console.error("❌ Login Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.get("/allHoldings", auth, async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions", auth, async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", auth, async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();

    res.send("new order saved!")
})



app.listen(port, () => {
    console.log(`app is listening on the port ${port}`)
    mongoose.connect(uri);
    console.log("database connected")
})