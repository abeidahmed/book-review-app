const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 255,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    authors: [
      {
        type: Schema.Types.ObjectId,
        ref: "Author"
      }
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
