import * as mongoose from 'mongoose';

export const <%= kebabToPascal(config.name) %>Schema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});