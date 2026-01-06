const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");
function connect() {
    mongoose.connect(process.env.MONGO_URL).then(() => { console.log("Database Connected Successfully!") }).catch((err) => { console.log("Something went wrong", err) });
};
connect();
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase : true
    },  
    city: {
        type: String
    }
});
const userRecords = mongoose.model("userRecords", userSchema);
app.post("/register", async (req, res) => {
    const { name, phoneNumber, email, city } = req.body;
    const isMatch = await userRecords.findOne({ email });
    if (isMatch) {
        return res.status(200).json({
            message: "Our team will contact you soon!"
        })
    }
    try {
        await userRecords.create({
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            city: city
        });
        return res.status(200).json({
            message: "Our team will contact you soon."
        })
    } catch (error) {
        return res.status(400).json({
            message: "Something went wrong."
        })
    }
})
app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is running on ${process.env.PORT}`);
})