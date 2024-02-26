import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  major: String,
  company: String,
  industry: String,
  contact: String,
});
