import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  login: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },

  avatar_url: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
