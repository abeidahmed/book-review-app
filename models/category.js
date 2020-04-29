const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255
  },
  description: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
});

module.exports = mongoose.model("Category", categorySchema);
