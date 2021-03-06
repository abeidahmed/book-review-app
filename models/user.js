const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      maxlength: 255,
      set: capitalize
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 255,
      set: capitalize
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
    role: {
      type: String,
      enum: ["Admin", "User"],
      required: true,
      default: "User"
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category"
      }
    ],
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book"
      }
    ]
  },
  { timestamps: true }
);

// capitalize string before storing in the db
function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
}

// generate jwt token
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.AUTH_SECRET_KEY);
  return token;
};

// create a virtual field for user's fullname
userSchema.virtual("fullName").get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// hash password before saving the user
userSchema.pre("save", async function(next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

module.exports = mongoose.model("User", userSchema);
