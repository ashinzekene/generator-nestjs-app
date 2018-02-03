import { Document } from 'mongoose';

export interface <%= kebabToPascal(config.name) %> extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}