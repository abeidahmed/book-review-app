const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    maxlength: 255
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category"
    }
  ]
});

userSchema.methods.generateAuthToken = async function() {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, process.env.AUTH_SECRET_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// hash password before saving the user
userSchema.pre("save", async function(next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

module.exports = mongoose.model("User", userSchema);
