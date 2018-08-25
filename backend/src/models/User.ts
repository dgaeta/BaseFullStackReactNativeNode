/**
 * Defines the User model.
 */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  /**
   * The date the user registered.
   */
  date: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('users', UserSchema);

export default User;