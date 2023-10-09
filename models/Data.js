const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  storedData: { 
    type: String, 
    unique: false,
    required: true,
  },
  key1: { 
    type: String, 
    unique: true,
    required: true,
  },
  key2: { 
    type: String, 
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

// Password hash middleware.
DataSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("key2")) {
    return next();
  }
  bcrypt.hash(user.key2, 10, (err, hash) => {
    if (err) return next(err)
    user.key2 = hash;
    next();
  });
});


// Helper method for validating user's password.
DataSchema.methods.comparePassword = function comparePassword( candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.key2, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("Data", DataSchema);