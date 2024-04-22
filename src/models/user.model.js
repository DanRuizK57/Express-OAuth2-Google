import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
  }
);

const UserModel = mongoose.model('User', UserSchema, 'users');

export default UserModel;