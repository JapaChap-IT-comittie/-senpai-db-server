import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = User & HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  major: string;
  @Prop()
  company: string;
  @Prop()
  industry: string;
  @Prop()
  contact: string;
  @Prop({ unique: true })
  username: string;
  @Prop()
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
