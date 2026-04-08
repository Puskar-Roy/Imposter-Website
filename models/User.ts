import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin'
  }
}, {
  timestamps: true
});

const User = models.User || model('User', UserSchema);

export default User;
