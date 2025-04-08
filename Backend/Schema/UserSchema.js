// const mongoose = require("mongoose")
// const { Schema } = require("mongoose");
// const bcrypt = require("bcryptjs");


// const UserSchema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["user", "admin"], default: "user" }, // For authorization
// });


// module.exports = mongoose.model("User", UserSchema);



const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

module.exports = UserSchema;
