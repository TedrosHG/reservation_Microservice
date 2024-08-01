import { AbstranctDocument } from "@app/common";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false})
export class UserDocument extends AbstranctDocument {
    @Prop()
    email: string;

    @Prop()
    password: string;


}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
