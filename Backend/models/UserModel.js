const { model } = require("mongoose");
const { UserSchema } = require("../schema/UserSchema.js");

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
