const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 255,
      set: capitalize
    },
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book"
      }
    ]
  },
  { timestamps: true }
);

// capitalize name before storing in the db
function capitalize(fullName) {
  const nameArray = fullName.split(" ");
  let newName = [];
  for (let name of nameArray) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    newName.push(capitalizedName);
  }
  return newName.join(" ");
}

module.exports = mongoose.model("Author", authorSchema);
